import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import checkedIMG from "../../../images/checked.svg";
import rechargedIMG from "../../../images/recharge.svg";
import shiporderIMG from "../../../images/shiporder.svg";

import thing1 from "../../../images/things_before1.svg";
import thing2 from "../../../images/things_before2.svg";
import thing3 from "../../../images/things_before3.svg";
import thing4 from "../../../images/things_before4.svg";

import thing5 from "../../../images/knowledge.svg";
import thing6 from "../../../images/tutorial.svg";

function SelectOrderType() {
  return (
    <div className="select_order_type">
      <h1 style={{ fontSize: "20px", fontWeight: "600" }}>
        Get Started in a few easy steps:
      </h1>
      <div className="selection_container">
        <div className="selection_box">
          <img src={checkedIMG}></img>
          <h1 className="frd">First Order Added.</h1>
          <br></br>
          <br></br>
          <Link to={"/orders_dashboard"}>
            <button>View Order</button>
          </Link>
        </div>
        <div className="selection_box">
          <img src={rechargedIMG}></img>
          <h1 className="frd">Recharge Your Wallet</h1>
          <p>
            Start your shipping journey with a recharge as low as Rs. 500 to
            your wallet
          </p>
          <br></br>
          <button>Recharge</button>
        </div>
        <div className="selection_box">
          <img src={shiporderIMG}></img>
          <h1 className="frd">Ship Your First Order</h1>
          <p>
            Select a courier of your choice and schedule a pickup when ready.
          </p>
          <br></br>
          <Link to="/orders">
            <button>Ship Now</button>
          </Link>
        </div>
      </div>

      <div className="container mt-3">
        <div
          className="alert alert-info d-flex justify-content-between align-items-center"
          role="danger"
        >
          <div>
            {/* <i className="bi bi-asterisk"></i> */}
            Create your KYC
            <Link to="/kyc">
              <i class="bi bi-arrow-right" style={{ float: "right" }}></i>
            </Link>
          </div>
        </div>
      </div>

      <h1 style={{ fontSize: "20px", fontWeight: "600" }}>
        Things to keep in mind before you ship your order:
      </h1>

      <div className="selection_container">
        <div className="selection_box_2">
          <img src={thing1}></img>
          <h1 className="frd2">Download & Print Invoice & Label</h1>
          <br></br>
          <a href="">Learn More.</a>
        </div>
        <div className="selection_box_2">
          <img src={thing2}></img>
          <h1 className="frd2">Keep your package ready</h1>

          <br></br>
          <a href="">Learn More.</a>
        </div>
        <div className="selection_box_2">
          <img src={thing3}></img>
          <h1 className="frd2">Keep your package ready</h1>

          <br></br>
          <a href="">Learn More.</a>
        </div>
        <div className="selection_box_2">
          <img src={thing4}></img>
          <h1 className="frd2">Download Manifest</h1>

          <br></br>
          <a href="">Learn More.</a>
        </div>
      </div>
      <h1 style={{ fontSize: "20px", fontWeight: "600" }}>Help Resources</h1>

      <div className="selection_container">
        <div className="selection_box_3">
          <div className="sb3">
            <h1 className="frd2">
              ShipQuicker <br></br>Knowledge Centre
            </h1>
            <br></br>
            <button>Visit Knowledge Centre</button>
          </div>
          <img src={thing5}></img>
        </div>
        <div className="selection_box_3">
          <div className="sb3">
            <h1 className="frd2">Watch Tutorials</h1>
            <br></br>
            <button>Watch Tutorials</button>
          </div>
          <img src={thing6}></img>
        </div>
      </div>
    </div>
  );
}

export default SelectOrderType;
