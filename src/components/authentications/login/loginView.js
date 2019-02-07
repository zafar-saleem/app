import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { checkCookie } from '../../../utils/cookies';

import './login.css';

const LoginView = (props) => (
  <div className='login-container'>
    <Link to='/' className='logo-login'></Link>
    {(checkCookie() !== null) ? <Redirect to='/admin/dashboard' /> : null}
    {(!props.isSuccess) ? <div className='error'>{props.message}</div> : null}
    <form onSubmit={props.handleLogin} className='login-form'>
      <div>
        <input type="text" name="username" placeholder="Username" className="fields" />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" className="fields" />
      </div>
      <div>
        <button className='btn success'>Login</button>
      </div>
    </form>
  </div>
);

export default LoginView;