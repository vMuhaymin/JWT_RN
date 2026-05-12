import { useState } from 'react'
import { Link } from 'react-router'

import './App.css'
import Login from '../components/Login'
import Register from '../components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Greetings !</h1>
      <div className="header">
        <button> <Link to="/register">Register</Link> </button>
        <button> <Link to="/login">Login</Link> </button>
      </div>
    </>
  )
}

export default App
