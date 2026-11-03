import React from 'react'
import Hero2 from '../HomePages/Hero2'
import Hero from '../HomePages/Hero'
import Hero3 from '../HomePages/Hero3'
import Hero4 from '../HomePages/Hero4'
import Hero5 from '../HomePages/Hero5'
import Hero6 from '../HomePages/Hero6'
import Hero7 from '../HomePages/Hero7'
import Hero8 from '../HomePages/Hero8'
import Hero9 from '../HomePages/Hero9'
// import Footer from '../Common/Footer'

const Home = () => {
  return (
    <div className='h-auto w-full flex flex-col gap-6'>
        <Hero/>
        <Hero2/>
        <Hero3/>
        <Hero4/>
        <Hero5/>
       <Hero6/>
      <Hero7/>
     <Hero8/>
     <Hero9/>

    </div>
  )
}

export default Home
