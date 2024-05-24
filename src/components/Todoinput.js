import React, { useState } from 'react'

function Todoinput(prop) {
    const [inputtask,setInputtask]=useState("")
  return (
    <div>
        <input type='text' name='t1' value={inputtask}
        onChange={(e)=>setInputtask(e.target.value)}/>
        <button onClick={()=>{prop.addtodo(inputtask)
        setInputtask("")}}>Add</button>
    </div>
  )
}

export default Todoinput