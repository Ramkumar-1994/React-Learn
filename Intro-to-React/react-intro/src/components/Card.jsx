import React from 'react'


const Card = ({img,title,status,desc}) => {
  
  return (
    <div>
      <div className='border w-[330px] rounded-lg p-3 shadow-lg m-5'>
      <img src={img} alt="" className='w-full rounded-lg'/>
      <div className='flex justify-between items-center mt-2'>
      <p className='font-bold text-xl'>{title}</p>
      
      <div className={status==='Non-Veg'?'w-3 h-3 bg-red-600 rounded-full':'w-3 h-3 bg-green-600 rounded-full'}></div>
      </div>
      <p className='text-sm pb-3 pt-2'>{desc}</p>
      </div>
      
    </div>
  )
}

export default Card
