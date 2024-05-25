import React, { useState } from "react";
import { Link } from "react-router-dom";
import imagelogo from "../../assets/logo1.jpg";
import "../login/Login.css";
import { API } from "../../service/api";
// import axios from 'axios';

const loginInitialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [login, setlogin] = useState(loginInitialValues);
  const [error, setError] = useState("");

  const onValueChange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await API.userLogin(login);
    if (response.isSuccess) {
      setError("");
    } else {
      setError("Something went wrong please try again");
    }
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <div className="upper-part">
          <div className="logo">
            <img src={imagelogo} alt="Logo" />
          </div>
          <div className="title">
            <p>Admin Login</p>
          </div>
        </div>
        <div className="middle-part">
          <form className="forrm">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={login.email}
                onChange={(e) => onValueChange(e)}
                name="email" // updated
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={login.password}
                onChange={(e) => onValueChange(e)}
                name="password" // updated
              />
            </div>

            {error && <div className="error">{error}</div>}
            <button
              type="submit"
              className="log-button btn-primary"
              onClick={() => loginUser()}
            >
              Login
            </button>
          </form>
        </div>
        <div className="lower-part">
          <p id="lower-text">*Only admins can login to "Create Blog" page*</p>
          <Link to="/" className="back-button btn-secondary">
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import { Button } from '@material-tailwind/react';

// const navigate = useNavigate(null);

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await fetch('/auth/login',{
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//   });
//     const data = await response.json();
//     if (data.token) {
//     localStorage.setItem('token', response.data.token);
//     window.location.href('/');
//   } else {
//     setError('Invalid email or password');
//   }
//   }  catch (error) {
//     console.error(error);
//     } };

// );
