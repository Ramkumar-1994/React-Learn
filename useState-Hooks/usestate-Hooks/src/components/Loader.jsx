import React from 'react'
import {useState} from 'react'

const Loader = () => {

  let [loader,setLoader]=useState(false)

  function loaderHandler()
  {
    console.log('Hello')
    setLoader((prev)=>!prev)
  }
  return (
    <div>
      <div className="container  mt-12 text-center">
      <h1 className='text-3xl font-extrabold'>This is Simple App</h1>
      <p className='text-md my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      
      <button className='bg-slate-900 text-white px-4 py-2 rounded-lg flex items-center mx-auto' onClick={loaderHandler}>Load data 
        {
        loader?<div className="loader ml-2"></div>:""
        }
       </button>
      </div>
    </div>
  )
}

export default Loader
