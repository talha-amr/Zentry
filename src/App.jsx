
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
function App() {
  return (
    <>
      <main className='relative min-h-screen w-screen'>
      <Hero/>
      <About/>
      <div className="h-dvh bg-black"></div>
      </main>
    </>
  )
}

export default App
