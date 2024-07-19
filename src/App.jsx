import React, { useEffect, useState } from 'react'

const App = () => {
  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })
  
  const onChangeTitle = (e)=>{
    setTitle( e.target.value)
    
    
   
  }
  const onChangeDesc = (e)=>{
    setDesc( e.target.value)
  
   
  }
  

  function addTodo (){
    
       setTodos([...todos,{
        title : title,
        desc :desc,
        id :todos.length + 1,
        complete:false
       }])
       setTitle("")
       setDesc("")
      // console.log(todos)
  }

  function updateTodo(id){
   setTodos(todos.map((todo)=>(
      todo.id === id
    ? {...todo,complete:!todo.complete}:todo)
  ))}

  function removeTodo (id){
       setTodos(todos.filter((todo)=>todo.id !==id))
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

 

  
  return (
    <div>

      <div>
        <input onChange={onChangeTitle} type="text" placeholder='title' name="title" value = {title} />
        <input onChange={onChangeDesc} type="text" placeholder='desc' name="desc" value={desc}/>
        
        <button onClick={addTodo}>Add todo </button>
      </div>
      <br />
      <br />
     
      <br />
      <hr />
      {/* {console.log(todos)} */}
      {todos.map((todo,index)=>{
        return(
          <div key = {index}>
            <h2>{todo.title}</h2>
            <h2>{todo.desc}</h2>
            <button onClick={()=>updateTodo(todo.id)}>{todo.complete?"completed":"not completed"}</button>
            <button onClick={()=>removeTodo(todo.id)}>Remove Todo</button>
             <br />
             <hr />
           </div> 
        )
      })}
    </div>
  )
}

export default App
