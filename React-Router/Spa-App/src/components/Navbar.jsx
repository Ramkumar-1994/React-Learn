import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="container flex items-center justify-between px-10 py-4 bg-slate-800 text-white">
        <Link to='/' className='font-extrabold text-2xl'>Instagram</Link>
        <div className='flex gap-5 font-medium hover:text-slate-100'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/request'>Request</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
