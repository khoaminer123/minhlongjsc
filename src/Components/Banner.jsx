import React from 'react'
import Bg from '../Assets/Lovepik_com-400159452-urban-construction-lines.jpg';

const Banner = () => {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <img
          src={Bg}
          alt="Background Image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center px-5">
        <div className="">
          <h1 className="text-3xl font-bold text-center mt-10 md:mt-20 text-shadow-y-2 text-shadow text-slate-200">Công ty Cổ phần Đầu tư và Xây dựng Minh Long Việt Nam</h1>
          <p className="mt-4 text-center text-shadow-black text-shadow-y-2 text-slate-100 mb-10 md:mb-20">Sẽ cùng quý vị tạo nên những công trình chất lượng, bền vưng theo thời gian.</p>
        </div>
      </div>
    </div>
  )
}

export default Banner