import React, { useState } from "react";

function ToDoList(){
    const [task,setTask] = useState(["Eat Breakfast","Eat Launch","Eat Dinner"])
    const [newTask, setNewTask] = useState("")
    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim()!==""){
            setTask(t=>[...t, newTask])
            setNewTask("")
        }
       
    }
    function deleteTask(index){
        const updatedTasks = task.filter((_,i)=> i !== index)
        setTask(updatedTasks)
    }
    function moveTaskUp(index){
        if(index >0)
        {const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index -1]] =
            [updatedTasks[index -1], updatedTasks[index ]]
            setTask(updatedTasks)}
        
    }
    function moveTaskDown(index){
        if(index < task.length -1)
            {const updatedTasks = [...task];
                [updatedTasks[index], updatedTasks[index +1]] =
                [updatedTasks[index +1], updatedTasks[index ]]
                setTask(updatedTasks)}
    }
    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" 
                    placeholder="Enter a task..." 
                    value={newTask}
                    onChange={handleInputChange}/>
                <button 
                    className="add-button"
                    onClick={addTask}>
                        Add Task
                </button>
            </div>
            <ol>
                {task.map((task,index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={()=>deleteTask(index)}>Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={()=>moveTaskUp(index)}>
                            👆
                        </button>
                        <button
                            className="move-button"
                            onClick={()=>moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
            
        </div>
    )
}
export default ToDoList