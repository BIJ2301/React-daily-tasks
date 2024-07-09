
import React , {useState} from "react";


const EventsManipulation = () =>  {
    // const countTasks = useState(0);
    // const count = countTasks[0];
    // const setCount = countTasks[1];

    const [count , setCount ] = useState(0);
    
    
    const handleClick = () => {
         setCount(count+1);
         console.log(count)
    }
    
  return (
    <div>
        <h1 >tasks :{count}  </h1>
        <button onClick={handleClick} value="Add task button"> Add tasks </button>
    </div>
  )
}
export default EventsManipulation