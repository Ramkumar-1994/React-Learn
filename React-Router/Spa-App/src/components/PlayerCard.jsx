import React from 'react'
import {Link} from 'react-router-dom'

const PlayerCard = ({name,img,desc,followers,following,username}) => {
  return (
    <div>
      <Link to={`/${name}`} className='cursor-pointer'>
      <div className="w-[90%] flex-col text-center sm:w-[500px] sm:flex sm:flex-row sm:justify-center mt-8 gap-5 p-3 rounded-lg mx-auto shadow-md border-2 border-slate-800">
        <img src={img} alt="" className='h-24 w-24 object-cover rounded-full text-center mx-auto hover:scale-110 mb-2'/>
        <div>
        <div className='flex gap-2 justify-center items-center'>
        <h1 className='font-bold'>{name}</h1>
        <h1 className="text-sm text-slate-600">@{username}</h1>
        </div>
        
        <p className=' text-sm'>{desc}</p>
        <div className='flex justify-center gap-3 mt-2'>
        <p className='bg-slate-800 p-1 px-2 rounded-md gap-2 text-white'>{`${followers} Followers`}</p>
        <p className='bg-slate-800 p-1 px-2 gap-2 rounded-md text-white'>{`${following} Following`}</p>
        </div>
        
        </div>
      </div>
      </Link>
    </div>

  )
}

export default PlayerCard
