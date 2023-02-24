import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../services/mutation';
import '../styles/index.css';
import '../styles/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.loginUser.token);
      history.push('/');
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const handleLogin = (event) => {
    event.preventDefault();
    loginUser({ variables: { email, password } });
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Login;
