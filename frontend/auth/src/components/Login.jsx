import { useState } from 'react';
import '../auth.css'
import {Link} from 'react-router-dom'
import { useEffect } from 'react';

function Login(){

  

    const [userInfo, setUserInfo] = useState({
        username:"",
        password:""
    });

    const [isLoading, setIsLoading] = useState(false);

    function handleChange( e ){
        setUserInfo({...userInfo, [e.target.name] : e.target.value})
    }

    async function checkUser() {
        const URL="http://localhost:3000/login";
        const response = await fetch(URL,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo)
        })
        if( !response.ok){
            console.error(`Couldnt send due to: ${response.json()}`)
            setIsLoading(false)
        }
        else{

            setIsLoading(false)
            window.location.reload();
            console.log(`username is ${userInfo.username} and password is ${userInfo.password}\nrespose is ${response.ok}`)
        }
  }

    return(<>
    <h1>Log in  !!</h1>
    <Link to="/">  ←  Home </Link>
        <div className="form-register">
            {
                isLoading ? <p>Loading . . .</p> :false
            }
            
            <div>
                <div className="username"> 
                    <label htmlFor="username">Username</label>
                    <br />
                    <input type="text" name="username" value={userInfo.username} onChange={handleChange} required />
                </div>

                <div className="password"> 
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" value={userInfo.password} onChange={handleChange} required />
                </div>

                
                <div className="auth-page-button"><button
  className="reg-submit"
  onClick={() => {
    setIsLoading(true);

    setTimeout(() => {
      console.log("Delayed!");
      checkUser();
    }, 4000);
  }}
>
  Login
</button></div>
                <br />
                <p>Don't have an account? <Link to="/register">Signup</Link></p>
            
            </div>
        </div>
    </>);
}


export default Login