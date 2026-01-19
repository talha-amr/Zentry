
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/all'
import { SplitText } from 'gsap/all'
import NavBar from './components/NavBar'
import Features from './components/Features'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'
gsap.registerPlugin(ScrollTrigger, SplitText)
function App() {
  return (
    <>
      <main className='relative min-h-screen w-screen'>
        <NavBar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
