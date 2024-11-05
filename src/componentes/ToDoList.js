import React, {useState, useEffect} from "react";
import "./Contenedor.css"


//Componente que muestra la lista de tareas 

function Tasklist({tasks,removeTask}){
    return(
        <ul>
            {tasks.map((task,index)=>(
                <li key={index} className="task-item">{task} <button className="removeBtn" onClick={()=>removeTask(index)}>x</button></li>
            ))}
        </ul>
    );
}

//armado del componente principal 

function TodoApp(){
    const[tasks,setTasks]= useState(()=>{
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    
    const[task,setTask]= useState("");

    
     useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
       }, [tasks]); 
       


    const addTask= ()=>{
        if (task.trim() !== "") {
        setTasks([...tasks,task]); //o=investigar estooo 
        setTask(''); 
       
    }
    }; 

   
    const removeTask= (index)=>{
        setTasks(tasks.filter((_,i)=> i !==index)); //investigar esta 
        

    };

   

    return(
        <div className="contenedor">
            <div className="welcome-bar">
           
            <div>
            <h2>Hi Taylor,</h2>
            <p>Take a look at your tasks!</p>
            </div>
            <img className="avatar" src="./woman.png" alt="women"/>
            </div>

            <div className="tasks-section">
            <h1>Weekly Tasks</h1>
            <div className="task-container">
            <input
            placeholder="Add a new task!"
            type="text"
            value={task}
            onChange={(e)=>setTask(e.target.value)} /*onchange es el evento*/
            />
            <button className="addBtn" onClick={addTask}>Add Task</button>
            
            <div className="task-list">
            <Tasklist tasks={tasks} removeTask={removeTask}/>
            </div>
            </div>
            </div>
        </div>
    )
}

export default TodoApp;
