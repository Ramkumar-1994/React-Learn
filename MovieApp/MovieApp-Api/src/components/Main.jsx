import React from 'react'
import {useState} from 'react'
const Main = () => {
  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
  const [task,setTask]=useState([])

  function submitHandler(e)
  {
      e.preventDefault()
      setTask([...task,{title,desc}])
      setTitle("")
      setDesc("")
      console.log(task)
  }
  function deleteHandler(i)
  {
    let copytask=[...task]
    copytask.splice(i,1)
    setTask(copytask)
  }
  let renderTask=<h2 className='font-bold'>No task Available</h2>

  if(task.length>0)
  {
    renderTask=task.map((t,i)=>
      {
        return(

          <div className='flex justify-between my-2 w-[90%] mx-auto' key={i}>
            <h5>{t.title}</h5>
            <h5>{t.desc}</h5>
            <button className='bg-red-600 text-white px-3 py-1 rounded-md font-lg' onClick={()=>deleteHandler(i)}>Delete</button>
          </div>
        )
      })
  }
  
  return (
    <div>
      <div className='w-[90%] md:w-[60%] mx-auto bg-zinc-50 rounded-md mt-5 shadow-md'>
        <form className='w-[80%] md:w-[50%] mx-auto pb-5' onSubmit={submitHandler}>
        <input placeholder='Enter Task here...' type="text" className='mt-10 border border-slate-300 rounded-md focus:outline-none w-full px-2 py-1' onChange={(e)=>{setTitle(e.target.value)}} required/>
        <input placeholder='Enter Description here...' type="text" className='mt-3 border border-slate-300 rounded-md focus:outline-none w-full px-2 py-1' onChange={(e)=>{setDesc(e.target.value)}} required/>
        <button type="submit" className='bg-slate-800 text-white px-3 py-1 rounded-md mt-3 mx-auto flex'>Add Task</button>
        </form>
      </div>
      <hr className='mt-10 mb-5'/>
      <div className='p-8 bg-slate-200 w-[90%] mx-auto'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </div>
  )
}

export default Main
