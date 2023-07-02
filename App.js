import './App.css';
import React, { useState } from 'react'

function App() {

  const [todo , SetTodo]  = useState("")
  const [Arr , SetArr]  = useState([])
  const addItem = ()=>{
  
    if (!todo) {
      alert("Please Write Something")
    } else {
      SetArr([...Arr,todo])
    }
    
  }
  const DeleteItem = (id)=>{
    const newArr = Arr.filter((val,index)=>{
      return id !==index
    })
    SetArr(newArr)
   }

  return (
    <div style={{textAlign:"center"}}>
    <div>
      <h1>TO-DO LIST</h1>
      <input type="text" value={todo} onChange={(e)=>{SetTodo(e.target.value)}} />
      <button onClick={addItem} className='butt'>Submit</button>
    </div>
    <div>
      <ul>
        {
          Arr.map((val,index)=>{
            return <li key={index}>{val} <button onClick={()=>DeleteItem(index)}>Delete</button></li>
          })
        }
      </ul>
    </div>
     </div>
  );
}

export default App;
