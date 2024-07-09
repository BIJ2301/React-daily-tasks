import React from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import TodoIcon  from './assets/direct-hit.png'
import DoingIcon from './assets/fire.png'
import DoneIcon from './assets/check-mark-button.png'

const App = () => {
  return (
    <div className='app'>
      <TaskForm />
      <main className='app_main'>
        <TaskColumn title= "To Do" icon= {TodoIcon}/>
        <TaskColumn title= "Doing" icon= {DoingIcon}/>
        <TaskColumn title= "Done" icon= {DoneIcon}/>
      </main>
    </div>
  )
}

export default App