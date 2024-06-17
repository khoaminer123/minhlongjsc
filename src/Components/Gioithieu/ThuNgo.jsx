import React from 'react'
import thungo from '../../Assets/thungo.png'

const ThuNgo = () => {
  return (
    <div className='px-5 py-5 flex justify-center'>
        <img 
        className='w-full md:w-[50%]'
        src={thungo} alt="" />
    </div>
  )
}

export default ThuNgo