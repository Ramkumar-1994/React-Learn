import React from 'react'
import Card from './components/Card'

const items = [
  {
    id: 1,
    imgSrc: "https://www.foodiesfeed.com/wp-content/uploads/2020/09/slice-of-pizza-2.jpg",
    title: "Pizza",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse dignissimos assumenda fugiat!",
    status: "Non-Veg"
  },
  {
    id: 2,
    imgSrc: "https://www.foodiesfeed.com/wp-content/uploads/2020/07/cheeseburger-with-fries.jpg",
    title: "Burger",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    status: "Non-Veg"
  },
  {
    id: 3,
    imgSrc: "https://www.foodiesfeed.com/wp-content/uploads/2020/08/sushi-plate.jpg",
    title: "Sushi",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    status: "Non-Veg"
  },
  {
    id: 4,
    imgSrc: "https://www.foodiesfeed.com/wp-content/uploads/2020/10/spaghetti-pasta-with-tomato-sauce.jpg",
    title: "Pasta",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: "Non-Veg"
  },
  {
    id: 5,
    imgSrc: "https://www.foodiesfeed.com/wp-content/uploads/2020/09/fresh-salad-with-tomatoes.jpg",
    title: "Salad",
    description: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio imperdiet imperdiet.",
    status: "Veg"
  },
  {
    id: 6,
    imgSrc: "https://www.foodiesfeed.com/wp-content/uploads/2020/07/cooked-steak.jpg",
    title: "Steak",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    status: "Non-Veg"
  },
  {
    id: 7,
    imgSrc: "https://www.foodiesfeed.com/wp-content/uploads/2020/08/tacos.jpg",
    title: "Tacos",
    description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    status: "Non-Veg"
  },
  {
    id: 8,
    imgSrc: "https://www.foodiesfeed.com/wp-content/uploads/2020/09/chocolate-cake.jpg",
    title: "Cake",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    status: "Veg"
  }
];


const App = () => {
  
  return (
    <div>
          <div className="grid gap-2 m-5 lg:grid-cols-3 md:grid-cols-2">
          {
              items.map((item)=>
              {
                  return <Card img={item.imgSrc} title={item.title} desc={item.description} status={item.status}/>
              })
            }
          </div>
        </div>

  )
}

export default App
