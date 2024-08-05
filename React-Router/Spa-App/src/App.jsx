import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Request from './pages/Request'
import PlayerDetails from './pages/PlayerDetails'
const App = () => {
  return (
    <div>
      <Navbar/>




      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/request' element={<Request/>}></Route>
        <Route path='/:name' element={<PlayerDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default App
