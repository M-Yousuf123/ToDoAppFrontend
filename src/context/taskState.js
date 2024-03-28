import { useState } from "react";
import TaskContext from "./taskContext";

const TaskState = (props) => {
  const host = "http://localhost:8000"
  const [tasks, setTasks] = useState([])

  //Get all Tasks
  const getTasks = async () => {
       //API call
       const response = await fetch(`${host}/api/tasks/fetchalltasks`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.t
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        }
      });
      const json = await response.json();
      setTasks(json)
  }


 
  return (
    <TaskContext.Provider value={{ tasks,getTasks}}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;