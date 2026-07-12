import "./Login.css";
export default function Login(){
    return <>
    <div id="main">
        <h1>Login Form</h1>
        <div id="parent">
            <button className="button" id="login">Login</button>
            <button className="button" id="sign">Signup</button>
        </div>
        <input type="email" name="" id="" placeholder="Email Address" />
        <input type="password" name="" id="pass" placeholder="Password"/>
        <h4>Forgot password?</h4>
        <button id="loginb">Login</button>
       <p><h4 id="member">Not a member? <span id="signd">Signup now</span></h4></p>
    </div>
    </>
}