import React from 'react'
import {useState} from 'react'

const Alert = () => {

  let [alert,setAlert]=useState(false)

  function showHide()
  {
    console.log('Hello')
    setAlert((prev)=>!prev)
  }
  return (
    <div>
      <div className="container  mt-12 text-center">
      <h1 className='text-3xl font-extrabold'>This is Simple App</h1>
      <p className='text-md my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      {
        alert ? <h1 className='border rounded-md p-2 my-2 absolute right-5 top-52 border-slate-900'>Create React App</h1>:""
      }
      
      <button className='bg-slate-900 text-white px-4 py-2 rounded-lg' onClick={showHide}> {`${alert?'Hide':'Show'} Alert`}</button>
      </div>
    </div>
  )
}

export default Alert
