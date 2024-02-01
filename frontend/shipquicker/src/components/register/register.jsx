import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api_url from "../../api_url/api_url.js";
import axios from "axios";
// import './style.css';
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
    //         <h1 className='login-head'>Register | ShipQuicker</h1>
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
    <MDBContainer
      fluid
      className="p-3 my-5 h-custom"
      style={{ paddingTop: "100px" }}
    >
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="4" md="4" style={{ marginTop: "7%" }}>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign Up with</p>

            <div className="row">
              <div className="col-md-6">
                <Button
                  className="mb-2 w-100"
                  size="lg"
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "red")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
                >
                  <img height={"25px"} src={googlePNG} alt="Google Logo" />
                  Sign in with Google
                </Button>
              </div>
              <div className="col-md-6">
                <Button
                  className="mb-2 w-100"
                  size="lg"
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    transition: "background-color 0.3s ease",
                    // marginLeft: "7%",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#1b77f2")
                  }
                  onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
                >
                  <img height={"25px"} src={facebookPNG} alt="Shopify Logo" />
                  Sign in with Facebook
                </Button>
              </div>
            </div>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <FormLabel>User Name</FormLabel>
              <MDBInput
                wrapperClass="mb-7"
                id="formControlLgName"
                type="text"
                size="md"
                value={FormValue.username} onChange={(e)=> handleChange(e)}
              />
            </div>
            <div className="col-md-6">
              <FormLabel>Email address</FormLabel>
              <MDBInput
                wrapperClass="mb-5"
                id="formControlLgEmail"
                type="email"
                size="md"
                value={FormValue.email} onChange={(e)=> handleChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <FormLabel>Contact Number</FormLabel>
              <MDBInput
                wrapperClass="mb-5"
                id="formControlLgContact"
                type="text"
                size="md"
              />
            </div>
            <div className="col-md-6">
              <FormLabel>Password</FormLabel>
              <MDBInput
                wrapperClass="mb-4"
                id="formControlLgPassword"
                type="password"
                size="md"
                value={FormValue.password} onChange={(e)=> handleChange(e)}
              />
            </div>
          </div>
          <FormLabel>Company Name (Optional)</FormLabel>
          <MDBInput
            wrapperClass="mb-5"
            // label="Company Name (Optional)"
            id="formControlLg"
            type="text"
            size="md"
          />

          {/* <div
            className="d-flex justify-content-between mb-4"
            style={{ textAlign: "end" }}
          >
            <a href="!#">Forgot password?</a>
          </div> */}

          <div
            className="text-center text-md-start mt-4 pt-2"
            style={{ marginTop: "5%" }}
          >
            <Button
              className="mb-0 px-5"
              size="lg"
              style={{ backgroundColor: "black" }}
              onClick={(e)=>handleSubmit(e)}
            >
              Register
            </Button>
            <p className="small fw-bold mt-2 pt-1 mb-2">
              Don't have an account?{" "}
              <Link to="/login" style={{ textAlign: "center", color: "blue" }}>
                {" "}
                Login{" "}
              </Link>
            </p>
          </div>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
  );
}

export default Register;
