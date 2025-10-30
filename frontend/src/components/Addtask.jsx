import { useState } from 'react'
import  '../style/addtask.css'
import { useNavigate } from 'react-router-dom'

function Addtask(){
    const[taskdata,settaskdata]=useState();
    console.log(taskdata)
    const nevigate=useNavigate();
    const handletask=async()=> {
        let result = await fetch("http://localhost:3500/add-task",{
            method:"Post",
            body:JSON.stringify(taskdata),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json();
        if(result){
            alert("task added successfully")
            nevigate('/')
        }else{
            alert("failed to add task")
        }
    }

    return(
        <>
         <div className="container">
            <h1>Add task page</h1>

        
            <input className="input" onChange={(event)=>settaskdata({...taskdata,title:event.target.value})} type="text" name="title"  placeholder="enter task title" required />

            <br /><br />
            <textarea className="input"onChange={(event)=>settaskdata({...taskdata,description:event.target.value})} name="description" placeholder="enter task description" required></textarea>

            <br /><br />
            <button onClick={handletask} className="btn" >Add Task</button>
            </div>
        </>
    )
}
export default Addtask