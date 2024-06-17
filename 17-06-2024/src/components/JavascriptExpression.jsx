import React from 'react'

const JavascriptExpression = () => {
    const tasks = 2;
    const hideButton = true;
    const styles = {
        backgroundColor: "red"
    };
    const counttasks = () => {
    
        return tasks === 0 ?  "No tasks available" : `Tasks : ${tasks} ` ;
       

    }
  return (
    <div>
        <h1 style={styles}>  {counttasks()} </h1>
        <button className='btn' disabled = {hideButton} value="Add task button"> Add tasks </button>
    </div>
  )
}

export default JavascriptExpression