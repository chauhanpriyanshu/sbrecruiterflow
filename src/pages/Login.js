import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import WebBody from '../components/WebBody';

import * as AuthActions from '../store/auth/actions';


function Login(props) {

  let navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginfailed, setloginfailed] = useState(false);

  function handleInputEmail(email){
    setemail(email)
  }

  function handleInputPassword(password){
    setpassword(password)
  }

  function handleLogin(){
    props.loginUser({
      "email": email,
      "password": password
    })
  }

  useEffect(() => {
    if(props.auth.setLoginSuccess===true){
      props.loginUserInit();
      navigate('/dashboard')
    }
    if(props.auth.setLoginFailure===true){
      props.loginUserInit();
      setloginfailed(true);
    }
  }, [props.auth]);


  useEffect(() => {
    props.storeInit();
  }, []);
  
  

  return (
    <WebBody>
      <Header>
      </Header>
      <div className='login-container'>
        <h1>Login</h1>
        <div className='input-container'>
          <p>Email address</p>
          <input style={{borderColor:`${(loginfailed===true)?"#ff0000":"#ccc"}`}} type="email" value={email} onChange={(e)=>{handleInputEmail(e.target.value)}} /> 
        </div>
        <div className='input-container'>
          <p>Password <button>Forgot your password?</button></p>
          <input style={{borderColor:`${(loginfailed===true)?"#ff0000":"#ccc"}`}} type="password" value={password} onChange={(e)=>{handleInputPassword(e.target.value)}} /> 
          <p style={{opacity:`${(loginfailed===true)?"1":"0"}`}} className='error-msg'>Incorrect email address or password</p>
        </div>
        <button className='login-cta' onClick={()=>{handleLogin()}}>Login</button>
        <div className='input-container sub'>
          <p>New to MyJobs?&nbsp;<button>Create an account</button></p>
        </div>
      </div>
    </WebBody>
  );
}

const mapStateToProps = state => ({
  auth: state.Auth,
})

const mapDispatchToProps = dispatch => ({
  loginUser: (data) => dispatch(AuthActions.loginUser(data)),
  loginUserInit: () => dispatch(AuthActions.loginUserInit()),
  storeInit: () => dispatch(AuthActions.storeInit()),
})


export default connect(mapStateToProps,mapDispatchToProps)(Login);
