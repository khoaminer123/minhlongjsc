import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import AboutUs from '../Components/AboutUs'
import GiaTri from '../Components/GiaTri'
import GiaiDoan from '../Components/GiaiDoan'
import SoDo from '../Components/SoDo'
import ThietBi from '../Components/ThietBi'
import NhanLuc from '../Components/NhanLuc'
import Footer from '../Components/Footer'
import SlideGallery from '../Components/SlideGallery'
import ZaloChatButton from '../Components/ZaloChatButton'

const HomePage = () => {
  return (
    <div className='bg-slate-50'>
        <Header/>
        <Banner/>
        <AboutUs/>
        <GiaTri/>
        <GiaiDoan/>
        <SoDo/>
        <ThietBi/>
        <NhanLuc/>
        <SlideGallery/>
        {/* <ZaloChatButton/> */}
        <Footer/>
    </div>
  )
}

export default HomePage