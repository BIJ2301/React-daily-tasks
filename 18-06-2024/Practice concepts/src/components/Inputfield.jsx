
import React , {useState} from "react";

const InputField = () =>  {
    const [count , setCount ] = useState(0);
    const [input , setInput] = useState("");
    const tasks = [ "Task 1", "Task 4", "Task 3"];
    
    const handleClick = () => {
         setCount(count+1);
    }
    const handleChange = (event) => {
        setInput(event.target.value)
    } 
    
  return (
    <div>
        <h1 >tasks :{count}  </h1>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleClick} value="Add task button"> Add tasks </button>
        <h1 >{input}</h1>
        <ul>
            {
                tasks.map(task => <li key={task}>{task}</li>)
            }
        </ul>
        
    </div>
  )
}
export default InputField