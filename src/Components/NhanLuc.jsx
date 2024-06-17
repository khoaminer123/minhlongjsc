import React from 'react'

const NhanLuc = () => {
  return (
    <div className='flex flex-col px-5'>
        <div>
            <p className='text-3xl font-bold text-sky-600 mt-10'>NGUỒN LỰC NHÂN SỰ</p>
        </div>
        <div className='flex flex-col md:flex-row'>
            <div className='mt-10'>
                <p>Nguồn nhân lực là tài sản lớn nhất của Công ty Cổ phần Đầu tư
                    và Xây dựng Minh Long Việt Nam, vì vậy chúng tôi luôn quan tâm xây dựng
                    đội nguc nhân sự chuyên nghiệp, đây chính là tiền đề để Công ty phát triển
                    bền vững.
                </p>
                <br />
                <p>
                    Sự kết hợp và phát triển giữa mô hình Công ty hiện đại tân tiến với
                    một Ban lãnh đạo trình độ cao, giàu kinh nghiệm cũng với đội ngũ nhân viên 
                    năng động, luôn nhiệt huyết và sáng tạo, đó chính là niềm tự hào và lợi thế
                    cạnh tranh của chúng tôi.
                </p>
                <br />
                <div className='flex flex-row items-center mt-10 md:items-end md:h-[400px] md:justify-end'>
                    <p className='text-9xl font-bold text-sky-600'>200</p>
                    <div className='ml-2  text-sky-600 font-bold'>
                        <p className='text-6xl'>+</p>
                        <p>Cán bộ</p>
                        <p>nhân viên</p>
                    </div>

                </div>
            </div>
            <div className='flex flex-col justify-center mt-10'>
                <div className='flex flex-row'>
                    <img
                    className='w-[70%] border-2 border-sky-600 rounded-md' 
                    src="https://mena.fes.de/fileadmin/_processed_/2/0/csm_TP_Workers-Rights_a1e7ff9a24.jpg" alt="" />

                    <img
                    className='w-[30%] ml-3 border-2 border-sky-600 rounded-md' 
                    src="https://media.istockphoto.com/id/157245748/photo/profile-silhouette-portrait-of-construction-worker-man.jpg?s=612x612&w=0&k=20&c=wyq6P9WgjK2NIY-nFCszcYMqPYDmXL22FiABLyUxLqQ=" alt="" />
                </div>
                <div className='mb-10 flex justify-center'>
                    <img
                    className='mt-3 border-2 border-sky-600 rounded-md' 
                    src="https://img.freepik.com/premium-photo/construction-worker-wearing-blue-hard-hat-blue-safety-helmet-works-building_889227-18894.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NhanLuc