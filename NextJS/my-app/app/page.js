"use client"
import React from 'react'
import {useState} from 'react'
import Header from '../components/Header'
const page = () => {
  const a="!!!"
  const [number,setNumber]=useState(10);
  const side1="India"
  const side2='Australia'

  function matchHandler()
  {
    setNumber(30)
  }
  return (
    <div>
        <div className='font-mono'>
          <h1 className='text-center  bg-red-400 p-3 text-2xl text-white font-extrabold'>ICC Cricket World Cup</h1>
          <h3 className='text-center mt-2'>Match No:{number}</h3>
          <h2 className='text-center my-3 text-3xl '>{`${side1} vs ${side2}`}</h2>
          <button className='bg-red-400 text-white px-5 py-2 text-center flex rounded-md mx-auto' onClick={matchHandler}>Update</button>
        </div>
        <Header></Header>
    </div>
  )
}

export default page
