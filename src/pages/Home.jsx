import React from 'react'
import Hero from '../componenets/Home/Hero'
import RecentDemos from '../componenets/Home/RecentDemos'
import Testimonilas from '../componenets/Home/Testimonials'
import About from '../componenets/Home/About'
import Footer from '../componenets/Home/Footer'


export default function Home() {
  return (
    
    <>
    <div style={{ marginTop:"50px"}}>
    <Hero/>
    <RecentDemos/>
    <Testimonilas/>
    <About/>
    <Footer/>
    </div>
    </>
  )
}

