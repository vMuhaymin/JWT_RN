import { useState } from 'react';
import '../auth.css'
import {Link} from 'react-router-dom'


function Register(){

    const [userInfo, setUserInfo] = useState({
        username:"",
        password:"",
        confirmPassword: ""
    })

    function handleChange(e){
        setUserInfo({...userInfo, [e.target.name]:e.target.value })
    }

    return(<>
    <h1>Register  !!</h1>
    <Link to="/">  ←  Home </Link>
        <div className="form-register">
            
            <form action="post">

                <div className="username"> 
                    <label htmlFor="username">Username</label>
                    <br />
                    <input type="text" name="username" value={userInfo.username} onChange={handleChange}  placeholder='i.e, Dominator' />
                </div>

                <div className="password"> 
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" value={userInfo.password} onChange={handleChange} />
                </div>

                <div className="password"> 
                    <label htmlFor="confirm-password">confirm password</label>
                    <input type="password" name="confirmPassword"  value={userInfo.confirmPassword} onChange={handleChange}  />
                </div>

                <div className="auth-page-button"><button className="reg-submit" onClick={()=>{ }}>Register</button></div>
                <br />
                <p>Do you have an account? <Link to="/login">Log in </Link></p>
            
            </form>
        </div>
    </>);
}


export default Register