import React from 'react'
import sodo from '../Assets/sơ đồ1.png'

const SoDo = () => {
  return (
    <div className='flex flex-col px-5'>
        <p className='text-3xl font-bold text-sky-600'>SƠ ĐỒ TỔ CHỨC</p>
        <img className='mt-10' src={sodo} alt="" />
    </div>
  )
}

export default SoDo