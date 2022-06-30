import React from "react"
import Header from "./Components/Head/Header"
import Features from "./Components/Features/Features"
import Home from "./Components/Hero/Home"
import Resume from "./Components/Resume/Resume"
import Testimonial from "./Components/Testimonial/Testimonial"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer"
import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Resume />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App
