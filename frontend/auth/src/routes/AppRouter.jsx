import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes.jsx'
import PublicRoutes from './PublicRoutes.jsx'

import { useState } from 'react'


function AppRouter(){

    const [status, setStatus] = useState("checking")

    return(
    <BrowserRouter>
        
            {/* <PublicRoutes/> */}
            <PrivateRoutes/>
        
    </BrowserRouter>
  )    
}
    
export default AppRouter