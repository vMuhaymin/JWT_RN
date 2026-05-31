import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes.jsx'
import PublicRoutes from './PublicRoutes.jsx'

import { useEffect, useState } from 'react'


function AppRouter(){
    // Either no-authenticated, authenticated, or checking
    const [status, setStatus] = useState("no-authenticated")
    
    useEffect(()=>{
      const URL = "http://localhost:3000/checkAuth";
      fetch(URL,{})
      .then(res => res.json())
      .then(res=>{ console.log(`The data is ${res.auth}`);  setStatus(res.auth)})
      .catch(err => console.log(err))
    },[])

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