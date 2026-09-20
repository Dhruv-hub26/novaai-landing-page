import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260729_102822_0e6c87e8-c141-4744-bf32-ad30db296371.mp4'

const FRAME_COUNT = 90
const FRAME_MAX_WIDTH = 960
const LERP_FACTOR = 0.12
const DPR = Math.min(window.devicePixelRatio || 1, 2)

export default function ScrollVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const posterRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const video = videoRef.current
    const posterImg = posterRef.current
    if (!canvas || !video || !posterImg) return

    let frames: ImageBitmap[] = []
    let framesReady = false
    let smoothed = 0
    let target = 0
    let rafId = 0
    let lastSeekTime = -1
    let unmounted = false

    // Object-cover draw helper
    function drawCover(source: ImageBitmap | HTMLVideoElement, ctx: CanvasRenderingContext2D, cw: number, ch: number) {
      const sw = source instanceof ImageBitmap ? source.width : (source as HTMLVideoElement).videoWidth
      const sh = source instanceof ImageBitmap ? source.height : (source as HTMLVideoElement).videoHeight
      if (sw === 0 || sh === 0) return
      const scale = Math.max(cw / sw, ch / sh)
      const dw = sw * scale
      const dh = sh * scale
      const dx = (cw - dw) / 2
      const dy = (ch - dh) / 2
      ctx.drawImage(source as CanvasImageSource, dx, dy, dw, dh)
    }

    function resize() {
      if (!canvas) return
      canvas.width = canvas.offsetWidth * DPR
      canvas.height = canvas.offsetHeight * DPR
    }

    function onScroll() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      target = scrollHeight > 0 ? Math.min(Math.max(window.scrollY / scrollHeight, 0), 1) : 0
    }

    async function extractFrames(offscreenVideo: HTMLVideoElement) {
      const total = Math.min(FRAME_COUNT, Math.max(24, Math.floor(offscreenVideo.duration * 12)))
      const offCanvas = document.createElement('canvas')
      const scale = Math.min(1, FRAME_MAX_WIDTH / offscreenVideo.videoWidth)
      offCanvas.width = Math.round(offscreenVideo.videoWidth * scale)
      offCanvas.height = Math.round(offscreenVideo.videoHeight * scale)
      const offCtx = offCanvas.getContext('2d')!

      const bitmaps: ImageBitmap[] = []
      for (let i = 0; i < total; i++) {
        if (unmounted) return
        const t = (i / (total - 1)) * (offscreenVideo.duration - 0.05)
        offscreenVideo.currentTime = t
        await new Promise<void>((res) => {
          const handler = () => { offscreenVideo.removeEventListener('seeked', handler); res() }
          offscreenVideo.addEventListener('seeked', handler)
        })
        offCtx.drawImage(offscreenVideo, 0, 0, offCanvas.width, offCanvas.height)
        bitmaps.push(await createImageBitmap(offCanvas))
      }
      if (!unmounted) {
        frames = bitmaps
        framesReady = true
        // Fade canvas in, video out
        if (canvas) canvas.style.opacity = '1'
        if (video) video.style.opacity = '0'
      }
    }

    function tick() {
      if (unmounted) return
      rafId = requestAnimationFrame(tick)
      smoothed += (target - smoothed) * LERP_FACTOR
      const ctx = canvas!.getContext('2d')
      if (!ctx) return
      const cw = canvas!.width
      const ch = canvas!.height

      if (framesReady && frames.length > 0) {
        const idx = Math.min(Math.floor(smoothed * (frames.length - 1)), frames.length - 1)
        ctx.clearRect(0, 0, cw, ch)
        drawCover(frames[idx], ctx, cw, ch)
      } else {
        // Fallback: seek visible video
        if (video && video.readyState >= 2 && video.duration > 0) {
          const seekTo = smoothed * (video.duration - 0.05)
          if (Math.abs(seekTo - lastSeekTime) > 0.04) {
            video.currentTime = seekTo
            lastSeekTime = seekTo
          }
          ctx.clearRect(0, 0, cw, ch)
          drawCover(video, ctx, cw, ch)
        }
      }
    }

    // Resize observer
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // Start offscreen extraction after visible video has loaded data + 300ms
    const offscreen = document.createElement('video')
    offscreen.muted = true
    offscreen.playsInline = true
    offscreen.preload = 'auto'
    offscreen.src = VIDEO_URL

    video.addEventListener('loadeddata', () => {
      // Fade out poster once video decoded
      if (posterImg) posterImg.style.opacity = '0'
      setTimeout(async () => {
        if (unmounted) return
        await new Promise<void>((res) => {
          if (offscreen.readyState >= 1) { res(); return }
          offscreen.addEventListener('loadedmetadata', () => res(), { once: true })
        })
        extractFrames(offscreen)
      }, 300)
    }, { once: true })

    rafId = requestAnimationFrame(tick)

    return () => {
      unmounted = true
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      ro.disconnect()
      frames.forEach((f) => f.close())
      offscreen.src = ''
    }
  }, [])

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden bg-[#0a0a0a]"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    >
      {/* Poster — bottom layer */}
      <img
        ref={posterRef}
        src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_102822_0e6c87e8-c141-4744-bf32-ad30db296371.mp4&w=1280&q=85"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ transition: 'opacity 500ms ease', opacity: 1 }}
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0' }}
      />
      {/* Visible video — middle layer */}
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ transition: 'opacity 500ms ease', opacity: 1 }}
      />
      {/* Canvas — top layer, fades in when frames ready */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ transition: 'opacity 500ms ease', opacity: 0 }}
      />
      {/* Subtle dark vignette overlay to improve text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.1) 40%, rgba(10,10,10,0.1) 60%, rgba(10,10,10,0.45) 100%)',
        }}
      />
    </div>
  )
}
