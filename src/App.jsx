import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <div className='h-screen bg-[#f1f1f1] text-[#212121] px-20 overflow-hidden'>
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default App