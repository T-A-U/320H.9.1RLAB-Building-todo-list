import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todolist from './Components/Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1> To Do List  </h1>
      <Todolist></Todolist>
      
      
    </>
  )
}

export default App
