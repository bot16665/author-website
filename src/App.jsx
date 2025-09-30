// App.jsx
import React from 'react'
import './App.css'
import Navbar from './components/Navebar'
import AboutPage from './pages/About'
import Books from './pages/Books'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      
      <section id="about">
        <AboutPage />
      </section>

      <section id="books">
        <Books />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}

export default App
