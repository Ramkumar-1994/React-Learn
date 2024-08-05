import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
const touristPlaces = [
  {
    placeName: "Goa",
    desc: "Famous for its beaches, nightlife, and Portuguese heritage.",
    img: "https://images.unsplash.com/photo-1548604303-0f41381e7a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdvYXxlbnwwfDB8MHx8fDA%3D",
    whenToVisit: "Winter",
    ratings: 4.5,
    price: 15000
  },
  {
    placeName: "Manali",
    desc: "A high-altitude Himalayan resort town known for its cool climate.",
    img: "https://images.unsplash.com/photo-1557540827-5dda50d8b8b7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbmFsaXxlbnwwfDB8MHx8fDA%3D",
    whenToVisit: "Summer",
    ratings: 4.7,
    price: 10000
  },
  {
    placeName: "Kerala",
    desc: "Known for its palm-lined beaches, backwaters, and rich traditions.",
    img: "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhfGVufDB8fDB8fHww",
    whenToVisit: "Winter",
    ratings: 4.8,
    price: 20000
  },
  {
    placeName: "Jaipur",
    desc: "The capital of Rajasthan, known for its historic palaces and vibrant culture.",
    img: "https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.6,
    price: 12000
  }
];

const App = () => {
  return (
    <div>
      <div className='w-[100%] mx-auto'>
        <Navbar/>
        <main>
            <div class='w-[90%] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 gap-3'>
              {
                touristPlaces.map((places)=>
                {
                  return <Card name={places.placeName} desc={places.desc} img={places.img} rating={places.ratings} price={places.price} visit={places.whenToVisit}/>
                })
              }
            </div>
        </main>
        <div className="w-full bg-slate-200">
        <Footer/>
        </div>
        
      </div>
    </div>
     
  )
}

export default App
