import React, { useState } from 'react';
import './Login.css';
import Logo from './images/Logo2.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    // const register = e => {
    //     e.preventDefault();

    //     auth
    //     .createUserWithEmailAndPassword(email, password)
    //     .then((auth) => {
    //         if (auth) {
    //             history.push('/')
    //         }
    //     })
    //     .catch(error => alert(error.message))

    // }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src={Logo} alt="" />
            </Link> 

            <div className="login_container">
                <h1 className="login_header">Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn} className="login_signInButton">Sign In</button>
                </form>

                <p>By signing in you agree to my Amazon's clone Condition of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>

                    <p className="login_registerContainer"><strong>New to Amazon-Clone?</strong> 
                    <Link to="/register" className="login_register">
                        Sign Up Free
                    </Link>
                    </p>
                
                {/* <button onClick={register} className="login_registerButton">Create your Amazon Account</button> */}
            </div>
        </div>
    )
}

export default Login
