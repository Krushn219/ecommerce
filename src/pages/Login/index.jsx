import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import "./style.css"
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { COMPLETE, LOGIN_REQUEST, NOT_ACTIVE, SET_LOGIN_REQUEST_STATUS } from "../../store/actions/types";


const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { loginRequestStatus } = useSelector((state) => state.auth);
  const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const handleInputField = (e) => {
    setloginData((value) => ({
      ...value,
      [e?.target?.name]: e?.target?.value,
    }));
  };
  useEffect(() => {
    if(loginRequestStatus === COMPLETE) {
      const nextPath = localStorage.getItem("nextPath")
      navigate(nextPath || '/my-account')
      localStorage.removeItem("nextPath")
      dispatch({ type: SET_LOGIN_REQUEST_STATUS, payload: NOT_ACTIVE })
    }
  }, [loginRequestStatus])
  
  const handle = () => {
    if (validation(loginData?.email, loginData?.password)) {
      dispatch({ type: LOGIN_REQUEST, payload: { ...loginData } })
    }
  };

  const validation = (email, password) => {

    if (!email && !password) {
      toast.error("All fields are required")
      return false
    }

    if (!email) {
      toast.error("Please enter email")
      return false
    }

    if (!pattern.test(email)) {
      toast.error("Please enter email in correct format")
      return false
    }

    if (pattern.test(email) && !password) {
      toast.error("Please enter password")
      return false
    }
    return true;
  };
    
    
  return (
    <div>
      <div className="login-wrapper">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a  href="/#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Login</li>
            </ul>
          </nav>
          <form>
            <div className="login-title">
              <h4 className="mb-0">Login into your account</h4>
            </div>
            <div className="login-info">
              <div className="row">
                <div className="col-md-3">
                  <label>Email</label>
                </div>
                <div className="col-md-6">
                  <input 
                    className="login-name-input"
                    onChange={handleInputField}
                    name="email"
                    value={loginData?.email}
                    type="email"
                  />
                </div>
              </div>
              <div className="login-password row">
                <div className="col-md-3">
                  <label>Password</label>
                </div>
                <div className="col-md-6">
                  <input 
                    type="password" 
                    className="login-name-input"
                    onChange={handleInputField}
                    name="password"
                    value={loginData?.password}
                  />
                </div>
              </div>
              <p className="forget-pass">Forget Your Password?</p>
              <button type='button' onClick={handle}>Sign in</button>
              <p className="create-account"><span className="pe-2">No account?</span><Link to="/register">Create one here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
