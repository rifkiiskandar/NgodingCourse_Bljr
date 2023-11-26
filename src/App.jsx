import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Kelas from './pages/Kelas'
import Testimoni from './pages/Testimoni'
import Faq from './pages/Faq'
import SyaratKetentuan from './pages/SyaratKetentuan'

import FooterComponent from './components/FooterComponent'
import NavbarComponent from './components/NavbarComponent'

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/kelas' Component={Kelas} />
        <Route path='/testimoni' Component={Testimoni} />
        <Route path='/faq' Component={Faq} />
        <Route path='/syaratketentuan' Component={SyaratKetentuan} />
      </Routes>

      <FooterComponent />
    </div>
  )
}

export default App