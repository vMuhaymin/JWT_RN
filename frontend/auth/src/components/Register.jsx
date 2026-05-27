import '../auth.css'
import {Link} from 'react-router-dom'


function Register(){

    return(<>
    <h1>Register  !!</h1>
    <Link to="/">  ←  Back </Link>
        <div className="form-register">
            
            <form action="post">

                <div className="username"> 
                    <label htmlFor="username">Username</label>
                    <br />
                    <input type="text" name="username" placeholder='i.e, Dominator' />
                </div>

                <div className="password"> 
                    <label htmlFor="password">password</label>
                    <input type="password" name="password"/>
                </div>

                <div className="password"> 
                    <label htmlFor="confirm-password">confirm password</label>
                    <input type="password" name="confirm-password"  />
                </div>

                <div className="auth-page-button"><button className="reg-submit" onClick={()=>{ }}>Register</button></div>
                <br />
                <p>Do you have an account? <Link to="/login">Log in </Link></p>
            
            </form>
        </div>
    </>);
}


export default Register