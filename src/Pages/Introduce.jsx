import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ThuNgo from '../Components/Gioithieu/ThuNgo'
import Banner from '../Components/Banner'
import ThongTinCty from '../Components/Gioithieu/ThongTinCty'

const Introduce = () => {
  return (
    <div className='bg-slate-50'>
        <Navbar/>
        <Banner/>
        <ThuNgo/>
        <ThongTinCty/>
        <Footer/>
    </div>
  )
}

export default Introduce