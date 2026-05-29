
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import LandingPage from '../components/LandingPage.jsx'
import Login from '../components/Login.jsx'
import Register from '../components/Register.jsx'


function PublicRouter(){
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />

            {/* This redirects unknown URLs to login */}
            <Route path='*' element={<Navigate to="/login" replace />} />
        </Routes>

  )    
}
    
export default PublicRouter;