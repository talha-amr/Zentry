
import './App.css'
import Hero from './components/Hero'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
function App() {
  return (
    <>
      <main className='relative min-h-screen w-screen'>
      <Hero/>
      <div className="h-dvh bg-blue-300 w-screen"></div>
      </main>
    </>
  )
}

export default App
