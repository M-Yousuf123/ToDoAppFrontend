import React from 'react'

const Todos = (props) => {
  return (
    <div>
      <ul className="list-group list-group-horizontal">
     <li className="list-group-item flex-fill" style={{width:'30%'}}>{props.date}</li>
     <li className="list-group-item flex-fill" style={{width:'70%'}}>{props.task}</li>
    </ul>
    </div>
  )
}

export default Todos
