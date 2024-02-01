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
    //     <h1 className='login-head'>Login | ShipQuicker</h1>
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

        <MDBCol col="4" md="4" style={{ marginTop: "10%" }}>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

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

          <FormLabel>User Name</FormLabel>
          <MDBInput
            wrapperClass="mb-5"
            id="formControlLg"
            type="email"
            size="md"
            value={username}
            onChange={(e)=> onChangeUsername(e)}
          />

          <FormLabel>Password</FormLabel>
          <MDBInput
            wrapperClass="mb-4"
            id="formControlLg"
            type="password"
            size="md"
            value={password} onChange={(e)=> onChangePassword(e)}
          />

          <div
            className="d-flex justify-content-between mb-4"
            style={{ textAlign: "end" }}
          >
            <a href="!#">Forgot password?</a>
          </div>

          <div className="text-center text-md-start mt-4 pt-2">
            <Button
              className="mb-0 px-5"
              size="lg"
              style={{ backgroundColor: "black" }}
              onClick={(e)=>submitLogin(e)}
            >
              Login
            </Button>
            <p className="small fw-bold mt-2 pt-1 mb-2">
              Don't have an account?{" "}
              <Link
                to="/register"
                style={{ textAlign: "center", color: "blue" }}
              >
                {" "}
                Register{" "}
              </Link>
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
