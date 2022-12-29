import React from 'react';
import './sign_in.css';
import { Link } from "react-router-dom";

const Signin = () => {
    return (
        <div className='sign-in'>
        <h1>Have an account Already</h1>
        <h3>Sign in here!</h3>
        <form>
        <label for='email'>Email</label>
            <input name='email' type='email' />
        <label for='password'>Password</label>
            <input name='password' type='password' />
        <label for='text'>Project Name</label>
            <input name='text' type='text' />
        <button>SIGN UP</button>
        </form>
        <p>Don't have an account? <Link to="/signin">Sign Up</Link></p>
        <p>
        <Link to="/">Back to home</Link>
      </p>
    </div>
    )
}

export default Signin;