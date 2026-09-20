import './index.css'
import ScrollVideo from './components/ScrollVideo'
import Navbar from './components/Navbar'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'

function App() {
  return (
    <div className="relative">
      {/* Fixed scroll-scrubbed video background */}
      <ScrollVideo />

      {/* Relative z-10 content wrapper */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <SectionOne />

          {/* 80vh spacer for scroll video scrubbing between sections */}
          <div className="h-[80vh]" aria-hidden="true" />

          <SectionTwo />
        </main>
      </div>
    </div>
  )
}

export default App
