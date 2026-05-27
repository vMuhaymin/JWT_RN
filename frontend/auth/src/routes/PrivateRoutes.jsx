import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Admin from '../components/Admin.jsx'



function PrivateRouter(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Admin/>} />
            {/* This redirects unknown URLs to login */}
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    </BrowserRouter>
  )    
}
    
export default PrivateRouter