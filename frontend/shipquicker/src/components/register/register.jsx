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
import Courier from "../../images/courier.jpg";

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
    <div class="login-container" style={{ fontFamily: "circular",paddingBottom:"1%",paddingTop:"1%" }}>
      <div class="card">
        <div class="row">
          <div class="col-md-6 card-left" style={{ textAlign: "center" }}>
            <h2>Shipquickr</h2>
            <button class="google-btn">
              <i class="bi bi-google"></i>
              Sign In with Google
            </button>
            <div class="text-center">or</div>
            <div class="login-form" style={{ textAlign: "center" }}>
              <h5>Create an account with Shipquickr</h5>
              <input
                className="form-control"
                placeholder="First Name*"
                type="text"
                name="username"
                style={{ marginBottom: "2%", borderRadius: "0px" }}
                value={FormValue.username} onChange={(e)=> handleChange(e)}
              />
              <input
                className="form-control"
                placeholder="Last Name*"
                type="text"
                style={{ marginBottom: "2%", borderRadius: "0px" }}
              />
              <input
                className="form-control"
                placeholder="Company Name*"
                type="text"
                style={{ marginBottom: "2%", borderRadius: "0px" }}
              />
              <input
                className="form-control"
                placeholder="Email*"
                type="email"
                style={{ marginBottom: "2%", borderRadius: "0px" }}
                name="email"
                value={FormValue.email} onChange={(e)=> handleChange(e)}
              />
              <input
                className="form-control"
                placeholder="Password*"
                type="password"
                name="password"
                style={{ marginBottom: "2%", borderRadius: "0px" }}
                value={FormValue.password} onChange={(e)=> handleChange(e)}
              />
              <input
                className="form-control"
                placeholder="Confirm Password*"
                type="password"
                style={{ marginBottom: "2%", borderRadius: "0px" }}
              />
              <input
                className="form-control"
                placeholder="Mobile Number*"
                type="text"
                style={{ marginBottom: "2%", borderRadius: "0px" }}
              />
              <input
                className="form-control"
                placeholder="Referral Code (Optional)"
                type="text"
                style={{ marginBottom: "2%", borderRadius: "0px" }}
              />
              <button type="submit" onClick={(e)=>handleSubmit(e)}>
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
            <div class="login-footer">
              <p>
                Already have an account? <Link to="/login">Sign In</Link>
              </p>
              <p>
                Have queries? Please mail us at
                <a href="mailto:business@Shipquickryaari.com">
                  business@Shipquickr.com
                </a>
              </p>
            </div>
          </div>
          <div
            class="col-md-6 card-right"
            style={{ backgroundColor: "#2f80ed", minHeight: "115vh" }}
          >
            <h2>Want to deliver items fast?</h2>
            <h1>Think Shipquickr Logistics</h1>
            <img
              alt="Illustration of a delivery person riding a scooter with a map and location markers in the background"
              height="400"
              src={Courier}
              width="500"
            />
            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                Shipquickr Logistics: Your Trusted Partner in Swift, Secure, and
                Seamless Deliveries.
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                With our dedication to efficiency and reliability, we ensure
                your parcels reach their destination promptly and intact.
                Experience the convenience of streamlined logistics with
                Shipquickr. Let us handle your shipments, while you focus on
                what truly matters. Shipquickr: Where speed meets reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
