//Logical && ,||

function getName(name)
{
  return name
}
let a=true
let b=false

console.log(a && getName('Sangam Mukjerjee'));

console.log(a||b);

// Template Literals

let name1='Shankar'

let name2='Kumar'

console.log(`${name1} ${name2}`)

//Ternary Operator

let showRecipee=true

function getRecipee(recipe)
{
  return recipe
}


function getRecipee2(recipe2)
{
  return recipe2
}

if(showRecipee)
{
  console.log(getRecipee('Pizza'))
}

else
{
  console.log(getRecipee2('Burger'))
}

showRecipee ?console.log(getRecipee('Pizza')):console.log(getRecipee2('Burger'))

//Destructing arrays and objects

const id=1
const productName='Apple Watch'
const rating=5

const product={
  id:id,
  productName:productName,
  rating:rating
}
//instead write like this
const product1={
  id,
  productName,
  rating
}

console.log(product)


const array=[1,2,3]

let getArray1=array[0]
let getArray2=array[1]
let getArray3=array[2]

let [ array1,array2,array3 ] =array

console.log(array1)
console.log(array2)
console.log(array3)

function mulOfTwo(num1=0,num2=0)
{
  console.log(num1)
  console.log(num2)
  return num1+num2
}

console.log(mulOfTwo(10,20))
console.log(mulOfTwo())

// Map,filter,find some,every,includes

const personArray=[
  {
    name:'Gill',
    age:24,
    country:'India'
  },
  {
    name:'Jack',
    age:22,
    country:'Australia'
  },
  {
    name:'Virat',
    age:34,
    country:'India'
  },
  {
    name:'Smith',
    age:34,
    country:'Australia'
  },
]

let getAllNames=personArray.map((person,index)=>
{
  return `${person.name} is ${person.age} old`
})
console.log(getAllNames)

let getAllcountry=personArray.filter((person,index)=>
  {
    return person.country==='India'})
  console.log(getAllcountry)


let checksomeArrayMethod=personArray.every((person)=>
{
  return person.age>30
})

console.log(checksomeArrayMethod)

//includes

let fruits=['apple','banana','orange']

//Arrow Function

const hello=()=>{
  console.log('Hello')
}

hello()

const square=(num)=>
{
  return num*num
}

let result=square(3);

console.log(result);

//Template literals

let user={
  name:'yash',
  email:'yash@gmail.com',
  age:24,
  city:'hyderabad'
}

console.log(`My name is ${user.name} from ${user.city} and email Id is ${user.email} and age is ${user.age}`)


let {name,age} =user

console.log(name,age)

let arr=[4,8,9,74,56,42]

let [c,...d]=arr

console.log(c,d)








