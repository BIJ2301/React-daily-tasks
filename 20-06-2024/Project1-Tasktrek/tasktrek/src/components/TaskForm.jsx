import React  , {useState} from 'react'
import Tag from './Tag'
import "./TaskForm.css"

const TaskForm = () => {
    // const [Task, setTask] = useState("")
    // const [Status, setStatus] = useState("Todo")

    // const handleStatusChange = (e) => {
    //     setStatus(e.target.value)
       
    // };
    // const handleTaskChange = (e) =>{
    //     setTask(e.target.value)
    // };

    const [TaskData, setTaskData] = useState({
        task : "",
        status : "Todo"
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setTaskData ((prev) => {
            return {...prev, [name]: value}
        })
        console.log(TaskData)
    }
  return (
    <header className='app_header'> 
        <form>
            <input 
                type='text' 
                name='task'
                className='task_input' 
                placeholder='Enter your task' 
                onChange={handleChange}
            />
            <div className='task_form_bottom_line'>
                <div>
                    <Tag tagName= "HTML"/>
                    <Tag tagName= "CSS"/>
                    <Tag tagName= "Javascript"/>
                    <Tag tagName= "React"/>
                   
                </div>
                <div>
                    <select 
                        className='task_status'
                        name='status'
                        onChange={handleChange}
                    >
                        <option value='todo'>To Do</option>
                        <option value='doing'>Doing</option>
                        <option value='done'>Done</option>
                    </select>
                    <button type='submit' className='task_submit'> + Add Task</button>
                </div>
            </div>
            
        </form>
    </header>
  )
}

export default TaskForm