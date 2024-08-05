import React from 'react'

const navbar=['Home','About','Contact'] 

const Footer = () => {
  return (
    <div>
      <div className='w-[90%] mx-auto flex justify-between p-3 font-medium '>
        <h1>All Rights Reserved @ToursTravels</h1>
        <div>
        <ul  className='flex space-x-4'>
          {
            navbar.map((item)=>
            {
                return <a><li className='cursor-pointer hover:text-gray-600'>{item}</li></a>
            })
          }
        </ul>
        </div>
        </div>
      </div>

  )
}

export default Footer
