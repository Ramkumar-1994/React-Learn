import React from 'react'
import PlayerCard from '../components/playerCard'
import PlayerData from '../PlayerData'
import {Link} from 'react-router-dom'

const Request = () => {
  return (
    <div>
       <h1 className='text-center font-extrabold text-3xl'>This is the Request Page</h1>
      
      <div className="container mt-14">
      {
        PlayerData.map((players)=>
        {
          return <PlayerCard name={players.name} img={players.img} desc={players.profile_description} followers={players.followers} following={players.following} username={players.username}/>
        })
      }

      </div>

    </div>
  )
}

export default Request
