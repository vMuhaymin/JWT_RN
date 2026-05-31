import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes.jsx'
import PublicRoutes from './PublicRoutes.jsx'

import { useEffect, useState } from 'react'



function AppRouter(){
  

    // Either no-authenticated, authenticated
    const [status, setStatus] = useState("no-authenticated");

    useEffect(()=>{
      
      const URL = "http://localhost:3000/checkAuth";
      fetch(URL,{})
      .then(res => res.json())
      .then(res=>{ setStatus(res.auth); })
      .catch(err => console.log(err))
       

    },[])

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