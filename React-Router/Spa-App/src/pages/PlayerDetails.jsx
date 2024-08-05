import React from 'react'
import { useParams } from 'react-router-dom'
import PlayerData from '../PlayerData'

const PlayerDetails = () => {

  let {name}=useParams()
  let playerName=PlayerData.find((player=>player.name===name))
  
  return (
    <div>
     <div className="w-[90%] flex-col sm:w-[60%] sm:flex sm:flex-row mt-8 gap-5 rounded-lg mx-auto shadow-md border-2 pb-28 p-10 items-center">
      <img src={playerName.img} alt="" className='h-48 w-48 object-cover rounded-full mx-auto hover:scale-110 mb-2'/>
        <div className='text-center'>
        <div className='flex sm:gap-2 text-center items-center justify-center sm:justify-start'>
        <h1 className='font-bold'>{playerName.name}</h1>
        <h1 className="text-sm text-slate-600">@{playerName.username}</h1>
        </div>
        
        <p className='text-sm'>{playerName.profile_description}</p>
        <div className='flex gap-3 mt-2 justify-center sm:justify-start'>
        <p className='bg-slate-800 p-1 px-2 rounded-md gap-2 text-white'>{`${playerName.followers} Followers`}</p>
        <p className='bg-slate-800 p-1 px-2 gap-2 rounded-md text-white'>{`${playerName.following} Following`}</p>
        </div>
      </div>
    
      </div>
        
      </div>
      
  )
}

export default PlayerDetails
