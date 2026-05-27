import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes.jsx'
import PublicRoutes from './PublicRoutes.jsx'

import { useState } from 'react'


function AppRouter(){

    const [status, setStatus] = useState("no-authenticated")

    if(status == "checking") return (<p>Loading...</p> ); 
    return(
    <BrowserRouter>
            {
                status === "authenticated" 
                ? <PrivateRoutes/> 
                : <PublicRoutes/>

            }

        
    </BrowserRouter>
  )    
}
    
export default AppRouter