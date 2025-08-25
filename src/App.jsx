
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/all'
import { SplitText } from 'gsap/all'
import NavBar from './components/NavBar'
import Features from './components/Features'
gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {
  return (
    <>
      <main className='relative min-h-screen w-screen'>
      <NavBar/>
      <Hero/>
      <About/>
      <Features/>
      <div className="h-dvh bg-black"></div>
      </main>
    </>
  )
}

export default App
