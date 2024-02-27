import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./components/login/login";
import Register from "./components/register/register";
import Profile from "./components/profile/profile";
import ServicesProviders from "./components/service/services";
import SelectOrderType from "./components/ordering/selectOrderType/selectOrderType";
import CustomOrder from "./components/ordering/customOrder/customOrder";
import OrderDone from "./components/ordering/orderDone/orderDone";
import Sidebar from "./components/sidebar/sidebar";
import OrderDashboard from "./components/ordering/order_dashboard/orderDashboard";
import Kyc from "./components/kyc/kyc";
import Orders from "./components/orders/orders";
import 'bootstrap-icons/font/bootstrap-icons.css';
import AddOrders from "./components/orders/add_orders/addOrders";
import Recharge from "./recharge/recharge";



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
    </div>
  )
}

const App = () => {
  
  const auth = localStorage.getItem("token");
  const [isLogin, setLogin] = useState(false);
 
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
    if(auth){
      setLogin(true)
    }
  }, []);

  return (
    <div>
      {/* <span>
          🤩 Recharge Now for ₹1000 & Get ₹1600* In Your Wallet | Use Code: FLAT600 | Limited Period Offer On First Recharge. *T&C Apply. <button> recharge now </button>
        </span> */}
      <Router>
        
        
          {isLogin == true ? (
            <>
            <Navigation isLogin={isLogin} setLogin={setLogin} />
              <Sidebar />
              <Routes>
                <Route path="/services" element={<ServicesProviders />} />
                <Route path="/" element={<SelectOrderType />} />
                <Route path="/orders_dashboard" element={<OrderDashboard />} />
                <Route path="/select_order_type/custom_order" element={<CustomOrder />} />
                <Route path="/done_order" element={<OrderDone />} />
                <Route path="/kyc" element={<Kyc />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/add_orders" element={<AddOrders />} />
                <Route path="/recharge" element={<Recharge />} />
              </Routes>
              <Contact data={landingPageData.Contact} />
            </>
          ) : (
            <>
              <Routes>
                {/* <Route path="/" element={<LandingPage/>} /> */}
                <Route path="/login" element={<Login setLogin={setLogin}/>} />
                <Route path="/" element={<Register setLogin={setLogin} />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </>
          )}

      </Router>
      
      
    </div>
  );
};

export default App;
