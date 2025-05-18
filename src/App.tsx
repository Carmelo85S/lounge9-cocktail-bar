import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Events from "./components/Events/Event"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Menu from "./components/Menu/Menu"
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Menu/>
    <Events />
    <Contact />
    <Footer />
    </>
  )
}

export default App
