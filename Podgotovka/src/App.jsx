import React, { createContext, useReducer } from 'react'
import { initialState, reducer } from '../../../lesson-11/src/store/authReducer'
import AddTodo from './components/AddTodo'

export const AuthContext = createContext()

const App = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState)
  return (
    <div>
        <AuthContext.Provider value={{ state, dispatch }}>
            <AddTodo />
        </AuthContext.Provider>
    </div>
  )
}

export default App