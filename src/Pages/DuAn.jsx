import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import DuAnTieuBieu from '../Components/DuAn/DuAnTieuBieu'
import Banner from '../Components/Banner'

const DuAn = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <DuAnTieuBieu/>
        <Footer/>
    </div>
  )
}

export default DuAn