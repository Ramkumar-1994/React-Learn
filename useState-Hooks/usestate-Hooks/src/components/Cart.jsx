import React from 'react'
import { useState } from "react";

const Cart = () => {

  let [add,setAdd]=useState(0)
  function incrementHandler()
  {
    setAdd((prev)=>prev+1)
  }
  function decrementHandler()
  {
    if(add>0)
    {
      setAdd((prev)=>prev-1)
    }
  }
  return (
    <div>
      <div className="container  mt-12 text-center">
      <h1 className='text-3xl font-extrabold'>This is Simple Cart App</h1>
      <p className='text-md my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <h1 className='text-2xl font-bold my-2'>{add}</h1>
      <button className='bg-orange-500 text-white px-4 py-2 rounded-lg' onClick={incrementHandler}>Increment</button>
      <button className='bg-orange-500 text-white rounded-lg px-4 py-2 mx-3' onClick={decrementHandler}>Decrement</button>
      </div>
      
    </div>
  )
}

export default Cart
