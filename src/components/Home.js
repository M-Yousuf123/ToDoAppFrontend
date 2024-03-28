import React, { useContext, useEffect } from 'react'
import Todos from './Todos'
import TaskContext from '../context/taskContext';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const context = useContext(TaskContext);
  const {tasks, getTasks} = context;
  useEffect(() => {
    if(localStorage.getItem("token")){
      console.log(localStorage.getItem("token"))
      getTasks()
    }
    else{
      Navigate("/login")
    }
    // eslint-disable-next-line
  }, [])
  return (
    <div>
        <h1 className='my-3'>All Tasks</h1>
        <Todos date="Date" task="Task"/>
        {tasks.map((task) => {
          return <Todos key={task.id} date={task.date} task={task.task}/>
        })}
    </div>
  )
}

export default Home
