import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div className='flex font-bold mt-5 text-xl bg-slate-500 p-2 text-white items-center justify-between'>
      <h1 className='font-bold bg-slate-500  text-white'>Navbar🚀</h1>
      <div >
        <ul className='flex gap-3 text-sm font-medium'>
          <Link className='cursor-pointer' to="/"><li>Home 🏠</li></Link>
          <Link className='cursor-pointer' to="/about"><li>About 🤵🏻</li></Link>
          <Link className='cursor-pointer' to="/contact"><li>Contact 📞</li></Link>
          
          
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Header
