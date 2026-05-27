import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../components/Login.jsx'
import Register from '../components/Register.jsx'

function AppRouter(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<p>HOME PAGE</p>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />

            {/* This redirects unknown URLs to login */}
            <Route path='*' element={<Navigate to="/login" replace />} />
        </Routes>
    </BrowserRouter>
  )    
}
    
export default AppRouter