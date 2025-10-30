import { useState, useEffect } from 'react'
import  '../style/addtask.css'
import { useParams } from 'react-router-dom';

function Updatetask(){
    const[taskdata,settaskdata]=useState();
    const{id}=useParams()
    useEffect(()=>{
        getTask(id)
    },[])

    const getTask= async (id)=>{
        let task = await fetch("http://localhost:3500/update/"+id)
        task = await task.json()
        if(task.result){
            settaskdata(task.result)
        }
    }
   

    return(
        <>
         <div className="container">
            <h1>Update task page</h1>

        
            <input className="input" onChange={(event)=>settaskdata({...taskdata,title:event.target.value})} type="text" name="title"  value={taskdata?.title} placeholder="enter task title" required />

            <br /><br />
            <textarea className="input"onChange={(event)=>settaskdata({...taskdata,description:event.target.value})} name="description"value={taskdata?.description} placeholder="enter task description" required></textarea>

            <br /><br />
            <button  className="btn" >Add Task</button>
            </div>
        </>
    )
}
export default Updatetask