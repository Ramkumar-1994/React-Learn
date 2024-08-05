import React from 'react'

const Card = ({name,img,rating,desc,price,visit}) => {
  return (
    <div>
      <div class='border p-3 my-5 rounded-lg shadow-lg shadow-slate-500'>
        <img src={img} alt="" className='rounded-lg mb-2'/>
        <div className='flex justify-between my-1'>
        <p className='font-extrabold'>{name}</p>
        <p className={visit==='Winter'?'bg-green-700 text-green-100 rounded-full px-2':'bg-orange-700 text-orange-100 rounded-full px-2'}>{`Best at ${visit}`}</p>
        </div>
        
        <p className='text-sm text-slate-600'>{desc}</p>
        <p className='font-medium'>{`Price: ${price}`}</p>
        <p>{`Ratings: ${rating}`}</p>
      </div>
    </div>
  )
}

export default Card
