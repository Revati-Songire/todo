import { useState } from 'react';
import './App.css';
import Todoinput from './components/Todoinput';
import Tododisplay from './components/Tododisplay';

function App() {
  const [todolist,setTodolist]=useState([])
  function addtodo(inputtask)
  {
    console.log(inputtask)
    setTodolist([...todolist,inputtask])
    console.log(todolist)
  }

  function deletetodo(id)
  {
    console.log(id)
    let newtodolist=[...todolist]
    newtodolist.splice(id,1)
    setTodolist(newtodolist)
  }
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <Todoinput addtodo={addtodo}/>
      {
        todolist.map((item,index)=>{
         return (
          <Tododisplay key={index} item={item} i={index}/>
         )
        })
      }
    </div>
  );
}
export default App;
