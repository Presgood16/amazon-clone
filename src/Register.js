import React, { useState } from 'react';
import './Register.css';
import Logo from './images/Logo2.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Register() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    


    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

    }

    return (
        <div className="register">
            <Link to="/">
                <img className="register_logo" src={Logo} alt="" />
            </Link>

            <div className="register_container">
                <h1 className="register_header">Sign Up</h1>

                <form>

                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button onClick={register} className="register_registerButton">Create your Amazon Account</button>
                </form>

                <p>By signing up you agree to my Amazon's clone Condition of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>

                <p className="register_loginContainer">
                    <strong>Already a member?</strong> 
                    <Link to="/login" className="register_login">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register
