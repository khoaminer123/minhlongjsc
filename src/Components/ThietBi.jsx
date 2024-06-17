import React from 'react'
import thietbi from '../Assets/thietbi1-removebg-preview.png'

const ThietBi = () => {
  return (
    <div className='flex flex-col px-5'>
        <p className='text-3xl font-bold text-sky-600 mt-10'>THIẾT BỊ</p>
        <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-[50%] mr-0 md:mr-10'>
                <p className='text-xl font-bold text-sky-600 mt-10'>AN TOÀN LÀ TRÊN HẾT</p>
                <br />
                <p>Nhằm cung ứng cho khách hàng các sản phẩm và dịch vụ có chất lượng tốt nhất,
                    trong thời gian qua chúng tôi đã đầu tư nhiều loại máy móc thiết bị mới, hiện đại
                    và có công suất lớn do các hãng nổi tiếng trên thế giới sản xuất.
                </p>
                <br />
                <p>Trang thiết bị, máy móc của chúng tôi gồm những máy tự động, bán tự động hiện đại
                    từ một số thương hiệu cung cấp máy móc trang thiết bị ngành cơ khí nổi tiếng. Những 
                    trang thiết bị mmasy móc của chúng tôi không những cải thiện năng suất, hiệu năng 
                    hoạt động mà còn mang tới sự an toàn cho người sử dụng, những qui trình sử dụng máy
                    móc nghiêm ngặt với chính sách "An toàn là trên hết" trong lao động
                </p>
            </div>
            <div>
                <img className='rounded-lg shadow-lg mt-10 md:mt-0' src="https://t3.ftcdn.net/jpg/01/79/03/56/360_F_179035673_zXpmg0CcsyLI1fqLP0RMDYxh3ToLxuVn.jpg" alt="" />
            </div>
        </div>
        <div className='w-full flex justify-center mb-10'>
        <img className='mt-10 w-full md:w-[50%]' src={thietbi} alt="" />
        </div>
    </div>
  )
}

export default ThietBi