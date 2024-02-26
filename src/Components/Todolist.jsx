import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Todolist.css'

export default function Todolist() {
    let uuidver = uuidv4()
    const [data, setdata] = useState('')

    //default list 
    const [todolist, settodolist] = useState([
        {
            id: 1,
            task: 'Walking'
        },
        {
            id: 2,
            task: 'Reading'
        }
    ])

    const handle = (e) => {
        setdata(e.target.value)
    }
    const handlechange = () => {
        settodolist([...todolist, { id: uuidver, task: data }])
        setdata("")

    }

    const handledelete = (deleteid) => {
        let filtered = todolist.filter((del) => del.id != deleteid)
        settodolist(filtered)
    }
    const handleupdate = (i) => {
        let update = prompt('update ur task', todolist[i].task)
        let copy = [...todolist]
        copy[i].task = update
        settodolist(copy)
    }
    return (
        <div className='container'>
            <h1 >DAILY WORK </h1>
            <br /> 
            <div className="task-text">
                <input value={data} type="text" placeholder="Tasks" onChange={(e) => handle(e)} />
                <button className="add" onClick={handlechange}>Add task</button>
                {todolist.map((list, i) => (
                    <div key={i} className="task">
                        <span className="items">{list.task}</span>
                        <div className='button-container'>
                        <button className="up" onClick={() => handleupdate(i)}>update</button>
                        <button className="del" onClick={() => handledelete(list.id)}>delete</button>
                    </div></div>
                ))}
            </div>
        </div>
    )
}