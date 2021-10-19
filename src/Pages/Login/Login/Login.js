import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useHistory, useLocation } from 'react-router';

const Login = () => {
  const{signInUsingGoogle}=useAuth()
  const auth = getAuth(); 
  const history = useHistory() 
  let location = useLocation(); 
  const redirect_uri = location.state?.from || '/home';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
      }
    
      const handleNameChange = e => {
        setName(e.target.value);
      }
      const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }
    
      const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
    
        if (isLogin) {
          processLogin(email, password);
        }
        else {
          registerNewUser(email, password);
        }
    
      }
    
      const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
          })
          .catch(error => {
            setError(error.message);
          })
      }
    
      const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            setUserName();
          })
          .catch(error => {
            setError(error.message);
          })
      }
    
      const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }
    
      const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
          .then(result => { })
      }
      const handleGoogleLogin =()=>{
        signInUsingGoogle()
        .then(result => {
          history.push(redirect_uri);
      })
      }
    return (
        <div>
           <div className="form-style mt-3">
           <form onSubmit={handleRegistration}>
        <h3 className="text-info">Please {isLogin ? 'Login' : 'Register'}</h3>
        {!isLogin && <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" onBlur={handleNameChange} className="form-control border border-primary" id="inputName" placeholder=" Enter Your Name" />
          </div>
        </div>}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleEmailChange} type="email" className="form-control border border-primary" id="inputEmail3" required placeholder="Enter Your Email" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" onBlur={handlePasswordChange} className="form-control border border-primary" id="inputPassword3" required  placeholder="Enter Your Password"/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger" > {error} </div>
        <button type="submit" className="btn btn-info">
          {isLogin ? 'Login' : 'Register'}
        </button>
        <button type="button" onClick={handleResetPassword} className=" m-2 btn btn-danger btn-sm" >Reset Password</button>

      </form>
           </div>
            <br />
            <h3>or</h3>
            <button onClick={handleGoogleLogin} className="btn btn-warning m-2">Google Sign In</button>
           </div>
    );
};

export default Login;