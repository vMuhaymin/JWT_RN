import '../auth.css'
import {Link} from 'react-router-dom'

function Login(){

    return(<>
    <h1>Log in  !!</h1>
    <Link to="/">  ←  Back </Link>
        <div className="form-register">
            
            <form action="post">

                <div className="username"> 
                    <label htmlFor="username">Username</label>
                    <br />
                    <input type="text" name="username"  />
                </div>

                <div className="password"> 
                    <label htmlFor="password">password</label>
                    <input type="password" name="password"/>
                </div>

                
                <div className="auth-page-button"><button className="reg-submit" onClick={()=>{ }}>Register</button></div>
                <br />
                <p>Don't have an account? <Link to="/register">Signup</Link></p>
            
            </form>
        </div>
    </>);
}


export default Login