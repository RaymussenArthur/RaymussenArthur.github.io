import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Social from './components/Social/Social'
import Footer from './components/Footer/Footer'
import Background from './components/Background/Background'
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator'

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Social />
      </main>
      <Footer />
      <ScrollIndicator />
    </>
  )
}
