import '../src/Register.css'

function Register(){
    return(<>
    <h1>Register  !!</h1>
        <div className="form-register">
            <form action="post">
                <label htmlFor="username"> Username </label>
                <input type="text" name="username"  /> 
            
            </form>
        </div>
    </>);
}


export default Register