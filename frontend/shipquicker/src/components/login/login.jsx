import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api_url from "../../api_url/api_url.js";
import axios from "axios";
import "./style.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import googlePNG from "../../images/google.png";
import facebookPNG from "../../images/facebook.png";
import txtPNG from "../../images/phone_no.png";
import Courier from "../../images/courier.jpg";

import { Button, FormLabel } from "react-bootstrap";

function Login({ setLogin }) {
  const navigate = useNavigate();
  const api_route = api_url();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [log_err, setLogErr] = useState(false);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitLogin = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    axios
      .post(`${api_route}/auth/login/`, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setLogin(true);
        navigate("/");
      })
      .catch((err) => {
        setLogErr(true);
      });
  };

  return (
    // <div className='login'>

    //     <div className='login-form form-group'>

    //     <div className='o_auth'>
    //         <div className='auth_'>
    //             <img height={'25px'} src={googlePNG}></img>
    //             <span>Google</span>
    //         </div>
    //         <div className='auth_'>
    //             <img height={'20px'} src={facebookPNG}></img>
    //             <span>Facebook</span>
    //         </div>
    //         <div className='auth_'>
    //             <img height={'25px'} src={txtPNG}></img>
    //             <span>Phone No</span>
    //         </div>
    //     </div>
    //     <h1 className='login-head'>Login | ShipquickrQuicker</h1>
    //     <br></br>
    //         <input className='form-control' type={"text"} placeholder={"Enter Your Username"} value={username} onChange={(e)=> onChangeUsername(e)} />
    //         <br></br>
    //         <input className='form-control' type={"password"} placeholder={"Enter Your Password"} value={password} onChange={(e)=> onChangePassword(e)} />
    //         <br></br>
    //         <button onClick={(e)=>submitLogin(e)} style={{color: "white", background: "#01A0A9"}} className='submit btn btn-dark'>Submit</button>
    //         <br></br>
    //         <br></br>

    //         <Link to='/register' style={{textAlign: "center", color: "blue"}}> Don't Have Account?</Link>
    //     </div>
    //     {log_err ? (
    //         <>
    //             <br></br>
    //             <p style={{textAlign: "center", color: "red"}}> Wrong Username or Password</p>
    //         </>
    //         ) : (
    //         <></>
    //     )}
    // </div>
    <div class="login-container" style={{fontFamily:'circular'}}>
      <div class="card">
        <div class="row">
          <div class="col-md-6 card-left" style={{textAlign:"center",paddingBottom:'14%'}}>
            <h2>Shipquickr</h2>
            <button class="google-btn">
              <i class="bi bi-google"></i>
              Sign in with google
            </button>
            <div class="text-center">or</div>
            <div class="login-form" style={{textAlign:'center'}}>
              <h5>Sign Up OR Login with Username / Mobile Number / Email ID</h5>
              <input
                placeholder="Username"
                type="text"
                value={username} onChange={(e)=> onChangeUsername(e)}
              />
              <input
                placeholder="Password"
                type="password"
                value={password} onChange={(e)=> onChangePassword(e)}
              />
              <button type="submit" onClick={(e)=>submitLogin(e)}>
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
            <div class="login-footer">
              <p>
                Don't have an account?
                <Link to="/">Click Here</Link>
              </p>
              <p>
                Have queries? Please mail us at
                <a href="mailto:business@Shipquickryaari.com">
                  business@Shipquickr.com
                </a>
              </p>
            </div>
          </div>
          <div class="col-md-6 card-right" style={{paddingBottom:'19%'}}>
            <h2>Want to deliver items fast?</h2>
            <h1>Think Shipquickr Logistics</h1>
            <img
              alt="Illustration of a delivery person riding a scooter with a map and location markers in the background"
              height="300"
              src={Courier}
              width="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
