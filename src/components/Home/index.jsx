import React from 'react'
import AboutUs from '../AboutUs'
import Cleaning from '../Cleaning'
import ContactUs from '../ContactUs'
import Footer from '../Footer'
import Navbar from '../Navbar'
import OurTeam from '../OurTeam'
import Services from '../Services'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Services/>
      <Cleaning/>
      <AboutUs/>
      <OurTeam/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home