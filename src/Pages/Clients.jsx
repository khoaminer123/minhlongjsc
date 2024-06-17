import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Doitac from '../Components/KhachHang/Doitac'
import HopDong from '../Components/KhachHang/HopDong'
import Banner from '../Components/Banner'

const Clients = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Doitac/>
        <HopDong/>
        <Footer/>
    </div>
  )
}

export default Clients