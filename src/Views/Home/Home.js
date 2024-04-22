import React, { useEffect, useState } from 'react'
import './Home.css'
import addIcon from "./plus.png"
import Taskcard from "./../../Components/Taskcard/TaskCard.js";

function Home() {
  const [tasks, setTasks] = useState([]);
  // const [newTask, setNewTask] = useState('')
  const [error, setError] = useState('');
  const [newTask, setNewTask] = useState('')
  const [category, setcategory] = useState('')
  

  const saveTaskToLS = (tasksTosave) => {
    localStorage.setItem('tasks', JSON.stringify(tasksTosave));
  }



  const validateNewTask = () => {
    if (newTask === '') {
      setError('please enter a task')
      return false
    }
    else if (newTask.length < 5) {
      setError('please enter a task')
      return false
    }
    else {
      setError('')
      return true
    }
  }
  const addTask = () => {
    const validationResult = validateNewTask(newTask);
    if (!validationResult) return;
    const newTasks = [
    {
      title:newTask,
      category: category,
    },
    ...tasks]
    saveTaskToLS(newTask);

    setTasks(newTasks);
    setNewTask('')
    // if (newTask=== '') {
    // setError('please enter a task')
    // return
    // }
    // else if ( newTask.length < 5) {
    // setError('Task  should be at least 5 characters long')
    // return
    // }
    // else {
    // setError('')
    // }
    // setTasks([   newTask, ...tasks])
    // setNewTask('')
    // }
    // const saveTaskToLS=(tasksTosave)=>{
    // localStorage.setItem('tasks',JSON.stringify(tasksTosave));


  }
  const deleteTask = (index) => {
    const newTasks = tasks;
    newTasks.splice(index, 1);
    setTasks([...newTask]);
    saveTaskToLS(newTask);
  }
  // const newTask= [newTask, ...tasks]

  // useEffect(()=>{
  //  if(tasks.length === 0){
  //  return
  //  }
  //  saveTaskToLS(newTask);
  //  localStorage.setItem('tasks',JSON.stringify(tasks))
  //  },[tasks])
  useEffect(() => {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      setTasks(JSON.parse(tasks));


    }
  }, [])

  return (
    <div>
      <h1 className='app-heading'> Todo app </h1>
      <div className='task-container'>

        {
          tasks.map((task, i) => {
            const{title,category}=task;

            return ( <Taskcard 
            title={title}
            category={category}
            key={i} delFunction={deleteTask} index={i}
            />) 

            // <div key={i} className='task-card'>
            // <h2 className='task-title'> {}</h2>
          })
        }
      </div>




      <p className='error-massage'>{error} </p>
      <div className='input-container'>

        <input type="text" placeholder="Add a new task" className='task-input'
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value)
          }}
        />
        <select class='cotegory-container' 
          value={category}
        onChange={(e) => {
          setcategory(e.target.value) }}>
          <option> category</option>
          <option value="✨College">✨College </option>
          <option value="✨shopping">✨Shopping</option>
          <option value="✨ Goal">✨Goal</option>
          <option value="✨Study">✨Study</option>
          <option value="✨Dance class">✨ Dance class</option>
          
        </select>
        <img src={addIcon} alt='Add' className='add-icon'
          onClick={addTask} />

      </div>
    </div>
  )




}

export default Home