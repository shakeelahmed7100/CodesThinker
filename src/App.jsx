import React from 'react'
import Home from './Components/Pages/Home'
// import Footer from './Components/Common/Footer'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/Pages/About'
import Services from './Components/Pages/Services'
// import WebsiteDevelopment from './Components/ServicesPages/WebsiteDevelopment'
import ServicesDetail from './Components/Pages/ServicesDetail'
import Projects from './Components/Pages/Projects'
import Team from './Components/Pages/Team'
// import { Connect } from 'vite'
import Contact from './Components/Pages/Contact'



const App = () => {
  return (
    <div>

      {/* <Home/> */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />
   <Route path='/services' element={<Services/>}/>
   {/* <Route path='/websitedevelopment' element={<WebsiteDevelopment/>}/> */}
     <Route path='/Services/:id' element={<ServicesDetail/>}/>
     <Route path='/projects' element={<Projects/>}/>
     {/* <Route path='/Contact' element={<Contact1/>}/> */}
     <Route path='/Team' element={<Team/>}/>
     <Route path='/Contact' element={<Contact/>}/>

     
      </Routes>
      
      <Footer/>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
