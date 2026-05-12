import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Routes, Route} from 'react-router'
import './index.css'
import App from './App.jsx'
import Login from '../components/Login'
import Register from '../components/Register'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>,


)
