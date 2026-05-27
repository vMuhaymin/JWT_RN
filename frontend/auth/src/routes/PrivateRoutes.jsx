import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Admin from '../components/Admin.jsx'



function PrivateRouter(){
    return(

        <Routes>
            <Route path="/" element={<Admin/>} />
            {/* This redirects unknown URLs to login */}
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>

  )    
}
    
export default PrivateRouter