import React from 'react'
import "./TaskCard.css"
import imgdelete from "./del.png"

function Taskcard({ title,category,delFunction,index}) {
  return (
    <div  className='task-card'>
         <h2 className='task-title'> {title}</h2>
         <span className='task-category'>{category}</span>
         <img src={imgdelete} alt='delete' className='delete-icon'
         onClick={()=>{
          delFunction(index)
         }}/>  
         </div>
             
  )
}

export default Taskcard