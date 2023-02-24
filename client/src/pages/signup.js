import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { CREATE_USER } from '../services/mutation';
// import { setToken } from '../services/auth';
import '../styles/signup.css';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const history = useNavigate();

  const [signup, { error }] = useMutation(CREATE_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await signup({
        variables: { ...formState },
      });

    //   setToken(data.signup.token);
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          {/* <img src={signupImg} alt="Signup" className="signup-image" /> */}
        </div>
        <div className="col-lg-6 col-sm-12">
          <h2 className="signup-title">Signup</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formState.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                placeholder="Enter a username"
                value={formState.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Enter a password"
                value={formState.password}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            {error && <div>Signup failed</div>}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Signup;