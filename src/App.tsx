import './index.css'
import ScrollVideo from './components/ScrollVideo'
import Navbar from './components/Navbar'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative bg-[#0a0a0a]">
      {/* Fixed scroll-scrubbed video background */}
      <ScrollVideo />

      {/* Relative z-10 content wrapper */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <SectionOne />

          {/* Spacer for scroll video scrubbing between sections */}
          <div className="h-[80vh] min-h-screen" aria-hidden="true" />

          <SectionTwo />

          {/* Additional spacer if desired, or go straight to SectionThree */}
          <div className="h-[40vh]" aria-hidden="true" />

          <SectionThree />
        </main>
        
        <Footer />
      </div>
    </div>
  )
}

export default App
