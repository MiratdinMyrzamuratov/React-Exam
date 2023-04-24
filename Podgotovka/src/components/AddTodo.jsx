import React, { createContext, useContext } from 'react'

const AddTodo = () => {
  const [ state, dispatch ]= useContext(createContext)

  
  
  return (
    <div>
      Todo list
      <form action="#">
        <input type="text" placeholder='Enter todo...'/>
        
      </form>
    </div>
  )
}

export default AddTodo