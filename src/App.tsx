import { useState } from 'react'
import './App.css'
import Todoinput from './components/Todoinput'
import TodoList from './components/TodoList'
import type { todoType } from './types/TodoTypes'

function App() {
  const [todos, setTodos] = useState<todoType[]>([])
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
        <h1 className="text-2xl font-bold mb-6">My Todo App</h1>

        {/* Input Box */}
        < Todoinput setTodos={setTodos}/>

        {/* Todo List */}
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    </>
  )
}

export default App
  
  