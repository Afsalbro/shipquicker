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
import shopify from "../../images/shopify.png";
import tick from "../../images/tick.png";
import trust from "../../images/trusted-by.png";


import { Button, FormLabel } from "react-bootstrap";

function Register({ setLogin }) {
  const navigate = useNavigate();
  const api_route = api_url();

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const [FormValue, setFormValue] = useState(initialValues);
  const [log_err, setLogErr] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...FormValue, [name]: value });
    console.log(FormValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: FormValue.username,
      email: FormValue.email,
      password: FormValue.password,
    };

    axios
      .post(`${api_route}/auth/register/`, data)
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
    //         <h1 className='login-head'>Register | shipquickr</h1>
    //         <br></br>
    //         <div className='login-form form-group'>
    //             <input className='form-control' type={"text"} name="username" placeholder={"Enter Your Username"} value={FormValue.username} onChange={(e)=> handleChange(e)} />
    //             <br></br>
    //             <input className='form-control' type={"email"} name="email" placeholder={"Enter Your Email"} value={FormValue.email} onChange={(e)=> handleChange(e)} />
    //             <br></br>
    //             <input className='form-control' type={"password"} name="password" placeholder={"Enter Your Password"} value={FormValue.password} onChange={(e)=> handleChange(e)} />
    //             <br></br>
    //             <button onClick={(e)=>handleSubmit(e)} className='submit btn btn-dark'>Submit</button>
    //             <br></br>
    //             <br></br>

    //             <Link to='/login' style={{textAlign: "center", color: "blue"}}> Already Have Account?</Link>
    //         </div>
    //         {log_err ? (
    //             <>
    //                 <br></br>
    //                 <p style={{textAlign: "center", color: "red"}}> User Already Exists!</p>
    //             </>
    //             ) : (
    //             <></>
    //         )}
    // </div>
    <div
      class="container d-flex align-items-center justify-content-center"
      style={{ minheight: "100%",paddingTop:'4%',fontFamily:'circular' }}
    >
      <div class="row w-100">
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <div class="card" style={{padding:'40px'}}>
            <h2 style={{color:'#004EFF'}}>Shipquickr</h2>
            <p>All Logistics. One API.</p>
            <form>
              <div class="mb-3">
                <input
                  class="form-control"
                  placeholder="First Name*"
                  required=""
                  type="text"
                  style={{marginBottom:'2%',borderRadius:'0px'}}
                  value={FormValue.username} onChange={(e)=> handleChange(e)}
                />
              </div>
              <div class="mb-3">
                <input
                  class="form-control"
                  placeholder="Last Name*"
                  required=""
                  type="text"
                  style={{marginBottom:'2%',borderRadius:'0px'}}
                />
              </div>
              <div class="mb-3">
                <input
                  class="form-control"
                  placeholder="Company Name*"
                  required=""
                  type="text"
                  style={{marginBottom:'2%',borderRadius:'0px'}}
                />
              </div>
              <div class="mb-3">
                <input
                  class="form-control"
                  placeholder="Email*"
                  required=""
                  type="email"
                  style={{marginBottom:'2%',borderRadius:'0px'}}
                  value={FormValue.email} onChange={(e)=> handleChange(e)}
                />
              </div>
              <div class="mb-3">
                <input
                  class="form-control"
                  placeholder="Password*"
                  required=""
                  type="password"
                  style={{marginBottom:'2%',borderRadius:'0px'}}
                  value={FormValue.password} onChange={(e)=> handleChange(e)}
                />
              </div>
              <div class="mb-3">
                <input
                  class="form-control"
                  placeholder="Confirm Password*"
                  required=""
                  type="password"
                  style={{marginBottom:'2%',borderRadius:'0px'}}
                />
              </div>
              <div class="mb-3">
                <input
                  class="form-control"
                  placeholder="Mobile Number*"
                  required=""
                  type="text"
                  style={{marginBottom:'2%',borderRadius:'0px'}}
                />
              </div>
              <div class="mb-3">
                <input
                  class="form-control"
                  placeholder="Referral Code (Optional)"
                  type="text"
                  style={{marginBottom:'2%',borderRadius:'0px'}}
                />
              </div>
              <div class="d-grid">
                <button class="btn btn-primary" type="submit" style={{width:'100%'}} onClick={(e)=>handleSubmit(e)}>
                SignUp
                <i class="bi bi-arrow-right"></i>
                </button>
              </div>
              <p class="form-text">
                Already have an account?
                <Link to="/login">Click Here</Link>
              </p>
            </form>
          </div>
        </div>
        <div class="col-lg-6 text-center">
          <h1>Ship Smarter, <span style={{color:'#004EFF'}}>Ship Faster </span></h1>
          <p>Fast and Easy Shipping from your doorstep to your customer's.</p>
          {/* <ul class="check-list"> */}
          <div>
          <img
              alt="BYJU'S logo placeholder"
              src={tick}
              style={{width:'5%',height:'5%'}}
            />96%* RTO reduction <br/>
           <img
              alt="BYJU'S logo placeholder"
              src={tick}
              style={{width:'5%',height:'5%'}}
            />99.6%* Highest delivery ratio <br/>
           <img
              alt="BYJU'S logo placeholder"
              src={tick}
              style={{width:'5%',height:'5%'}}
            />98.5%* On-time order pick-up <br/>
          {/* </ul> */}
          </div>
          
          <div class="brand-logos">
            {/* <img
              alt="BYJU'S logo placeholder"
              src={trust}
              style={{width:'70%',height:'30%'}}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
