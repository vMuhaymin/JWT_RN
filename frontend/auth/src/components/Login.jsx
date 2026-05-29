import { useState } from 'react';
import '../auth.css'
import {Link} from 'react-router-dom'

function Login(){

    const [userInfo, setUserInfo] = useState({
        username:"",
        password:""
    });

    function handleChange( e ){
        setUserInfo({...userInfo, [e.target.name] : e.target.value})
    }

    function onSub(){
        console.log(`Username is: ${userInfo.username} | Password is ${userInfo.password}`)
    }


    return(<>
    <h1>Log in  !!</h1>
    <Link to="/">  ←  Home </Link>
        <div className="form-register">
            
            <form action="">

                <div className="username"> 
                    <label htmlFor="username">Username</label>
                    <br />
                    <input type="text" name="username" value={userInfo.username} onChange={handleChange} required />
                </div>

                <div className="password"> 
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" value={userInfo.password} onChange={handleChange} required />
                </div>

                
                <div className="auth-page-button"><button className="reg-submit">Register</button></div>
                <br />
                <p>Don't have an account? <Link to="/register">Signup</Link></p>
            
            </form>
        </div>
    </>);
}


export default Login