import React from 'react'
import Banner from './Banner'
import AboutUs from './AboutUs/AboutUs'
import Services from './Services/Services'
import Fotter from '../Shared/Fotter/Fotter'
import ContactUs from './ContactUs/ContactUs'

const Home = () => {
  return (
    <div>
      <Banner/>
      <AboutUs/>
      <Services/>
      <ContactUs/>
      <Fotter/>
    </div>
  )
}

export default Home
