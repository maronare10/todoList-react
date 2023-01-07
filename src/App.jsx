import React, { useState } from 'react'

const App = () => {

  const [taskInput, setTaskInput] = useState("")
  const [taskList, setTaskList]= useState([])

  const handleChange = (event) => {
    console.log(event.target.value)

    setTaskInput(event.target.value)

  }

  const handleSubmit = (event) => {
    console.log(event)
    event.preventDefault()
    setTaskList(taskList.concat(taskInput))
    setTaskInput('')

      
  }

  return (
    <div>
      <h1>Todo list</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={taskInput}/>
        <button>Enviar</button>
      </form>

      <ul>
        {taskList.map(task => {
        
          return <li key={task}>{task}</li>
        })

        }
      </ul>

    </div>
  )
}

export default App