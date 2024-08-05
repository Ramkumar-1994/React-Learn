import React from 'react'

const navbar=['Home','About','Contact']
const Navbar = () => {
  return (
    <div>
      <div className="">
      <div className='w-[90%] mx-auto flex justify-between items-center p-3 font-medium'>
        <h1 className='text-orange-700 font-extrabold font-mono text-xl'>ToursTravels</h1>
        <div>
        <ul  className='flex space-x-4'>
          {
            navbar.map((item)=>
            {
                return <li className='cursor-pointer hover:text-gray-600'>{item}</li>
            })
          }
        </ul>
        </div>
        </div>
      </div>
     
        
        
      </div>
  )
}

export default Navbar
