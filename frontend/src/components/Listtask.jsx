import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/listtask.css'

export const Listtask = () => {
  const [taskdata, setTaskdata] = useState([]);  // Initialize with empty array
    useEffect(() => {
        getListdata();
    }, [])

    const getListdata = async () => {
        let list = await fetch("http://localhost:3500/tasks");
        list = await list.json();
        if(list.success){
            setTaskdata(list.result)
        }
    }
    const deleteTask =async (id)=>{
        let item = await fetch("http://localhost:3500/delete/"+id,{method:"delete"});
        item = await item.json()
        if(item.success){
            getListdata();
        
        }


    }



  return (
    <div>
        <h1>Task List</h1>
        <ul className='task-list'>
            <li className='list-header'>s.no</li>
            <li className='list-header'>title</li>
            <li className='list-header'>description</li>
            <li className='list-header'>Action</li>
            {taskdata && taskdata.map((item, index) => (
                <>
                    <li className='list-item'>{index+1}</li>
                    <li className='list-item'>{item.title}</li>
                    <li className='list-item'>{item.description}</li>
                    <li className='list-item'><button onClick={()=>deleteTask(item._id)}className='delete-item'>Delete</button>
                    <Link to={'/update/'+ item._id} className='update-item' >Update</Link>
                     </li>
                    {/* <li className='list-item'><button onClick={()=>deleteTask(item._id)}className='delete-item'> Update</button></li> */}


                </>
            ))}
        </ul>
    </div>
  )
}