import { useState } from 'react';
import '../auth.css'
import {Link} from 'react-router-dom'


function Register(){

    const [userInfo, setUserInfo] = useState({
        username:"",
        password:"",
        confirmPassword: ""
    })

    const [validInfo, setValidInfo]= useState(true);
    const [load, setLoad]= useState(false);

    

    function handleChange(e){
        setUserInfo({...userInfo, [e.target.name]:e.target.value })
    }
    
    async function registerUser() {
        if (userInfo.password !== userInfo.confirmPassword ){
             setValidInfo(false)
        } else{
            setLoad(true);
            setValidInfo(true)
            const URL = "http://localhost:3000/register";
            const respose = await fetch(URL,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo)

            });
            if (!respose.ok){
                console.error(`There was an error: ${respose.json()}`)
            }
        }
        setLoad(false);
    }

    return(<>
    <h1>Register  !!</h1>
    <Link to="/">  ←  Home </Link>
        <div className="form-register">
            
            <div >

                {
                    !validInfo &&  <p> Password Do not Match !</p>
                }
                {
                    load  &&  <p> loading...</p>
                }

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

                <div className="auth-page-button"><button className="reg-submit" onClick={()=>{ registerUser()}}>Register</button></div>
                <br />
                <p>Do you have an account? <Link to="/login">Log in </Link></p>
            
            </div>
        </div>
    </>);
}


export default Register