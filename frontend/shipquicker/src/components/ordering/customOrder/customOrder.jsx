import React, {useState, useEffect} from 'react'
import api_url from '../../../api_url/api_url';
import '../styles.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';


function CustomOrder() {

    const navigate = useNavigate();
    const api_route = api_url();
    const token = localStorage.getItem("token")

    const initialValues = {
        city: "",
        complete_address: "",
        country: "",
        email: "",
        hsn_code: "",
        order_channel: "",
        order_from_user: "",
        pakage_weight: "",
        phone_number: "",
        product_description: "",
        product_name: "",
        quantity: "",
        state: "",
        unit_price: "",
        username: ""
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
            city: FormValue.city,
            complete_address: FormValue.complete_address,
            country: FormValue.country,
            email: FormValue.email,
            hsn_code: FormValue.hsn_code,
            order_channel: FormValue.order_channel,
            order_from_user: FormValue.order_from_user,
            pakage_weight: FormValue.pakage_weight,
            phone_number: FormValue.phone_number,
            product_description: FormValue.product_description,
            product_name: FormValue.product_name,
            quantity: FormValue.quantity,
            state: FormValue.state,
            unit_price: FormValue.unit_price,
            username: FormValue.username
        }

        axios.post(`${api_route}/custom_orders/`, data, {
            headers: {
              'Authorization': `token ${token}` 
            }
          })
            .then((res)=>{
                console.log(res.data);
                setLogErr(!log_err)
                navigate('/orders_dashboard')
            }).catch((err) => {
                console.log(err);
                setLogErr(!log_err)
            })
    };

    return (
        <div className='custom_order'>
            <h1>Add Buyer Details</h1>

            <div className='custom_order_form'>
                <h4>To Whom the order Being Delivered? <span style={{"fontSize": "12px"}}>Buyer's Info</span> </h4>

                <div className='custom_order_input_container'>
                    <div className='input_container'>
                        <label>Phone Number</label>
                        <br></br>
                        <input className='form-control' value={FormValue.phone_number} onChange={(e)=> handleChange(e)} name='phone_number' type={"tel"} placeholder="Mobile Number"></input>
                    </div>
                    <div className='input_container'>
                        <label>Full Name</label>
                        <br></br>
                        <input className='form-control' name='username' value={FormValue.username} onChange={(e)=> handleChange(e)} type={"text"} placeholder="Full Name"></input>
                    </div>
                    <div className='input_container'>
                        <label>Email</label>
                        <br></br>
                        <input className='form-control' name='email' value={FormValue.email} onChange={(e)=> handleChange(e)} type={"email"} placeholder="Email Address"></input>
                    </div>
                </div>

                <br></br>
                <h4>Where is the order Being Delivered to? <span style={{"fontSize": "12px"}}>Buyer's Address</span> </h4>

                <div className='custom_order_input_container'>
                    <div className='input_container'>
                        <label>Complete Address</label>
                        <br></br>
                        <input className='form-control' value={FormValue.complete_address} onChange={(e)=> handleChange(e)} name='complete_address' type={"text"} placeholder="Complete Address"></input>
                    </div>
                    <div className='input_container'>
                        <label>City</label>
                        <br></br>
                        <input className='form-control' name='city' value={FormValue.city} onChange={(e)=> handleChange(e)} type={"text"} placeholder="City"></input>
                    </div>
                    <div className='input_container'>
                        <label>State</label>
                        <br></br>
                        <input className='form-control' name='state' value={FormValue.state} onChange={(e)=> handleChange(e)} type={"text"} placeholder="State"></input>
                    </div>
                    <div className='input_container'>
                        <label>Country</label>
                        <br></br>
                        <input className='form-control' name='country' value={FormValue.country} onChange={(e)=> handleChange(e)} type={"text"} placeholder="Country"></input>
                    </div>
                </div>
            </div>

            <h1>Add Pickup Details</h1>

            <div className='custom_order_form'>
                <h4>Where is the order being sent from? (Your Address)</h4>

                <div className='custom_order_input_container'>
                    <div className='input_container'>
                        <label>Recently Used Addresses</label>
                        <br></br>
                        <input style={{width: "20px"}} className='form-control' value={true} type={"checkbox"} name='recent_address' placeholder=""></input>
                    </div>
                </div>
            </div>

            <h1>Add Order Details</h1>

            <div className='custom_order_form'>

                <div className='custom_order_input_container'>
                    <div className='input_container'>
                        <label>Order Channel</label>
                        <br></br>
                        <input className='form-control' name='order_channel' value={FormValue.order_channel} onChange={(e)=> handleChange(e)} type={"text"} placeholder="Custom"></input>
                    </div>
                </div>
                <br></br>
                <h4>Product Details</h4>

                <div className='custom_order_input_container'>
                    <div className='input_container'>
                        <label>Product Name</label>
                        <br></br>
                        <input className='form-control' value={FormValue.product_name} onChange={(e)=> handleChange(e)} name='product_name' type={"text"} placeholder="Product Name"></input>
                    </div>
                    <div className='input_container'>
                        <label>Unit Price</label>
                        <br></br>
                        <input className='form-control' name='unit_price' value={FormValue.unit_price} onChange={(e)=> handleChange(e)} type={"text"} placeholder="Unit Price"></input>
                    </div>
                    <div className='input_container'>
                        <label>Quantity</label>
                        <br></br>
                        <input className='form-control' name='state' value={FormValue.state} onChange={(e)=> handleChange(e)} type={"text"} placeholder="Quantity"></input>
                    </div>
                    <div className='input_container'>
                        <label>HSN Code</label>
                        <br></br>
                        <input className='form-control' name='hsn_code' value={FormValue.hsn_code} onChange={(e)=> handleChange(e)} type={"text"} placeholder="HSN Code"></input>
                    </div>
                    <div className='input_container'>
                        <label>Product Description</label>
                        <br></br>
                        <input className='form-control' name='product_description' value={FormValue.product_description} onChange={(e)=> handleChange(e)} type={"text"} placeholder="Product Description"></input>
                    </div>
                </div>
            </div>

            <h1>Payment Details</h1>
            <p>Select mode of payment that your buyer has chosen for the order</p>
            <div className='custom_order_form'>
                <div className='custom_order_input_container'>
                    <div className='input_container'>
                        <label>Prepaid</label>
                        <br></br>
                        <input name='order_chanel' value={true} style={{"fontSize": "10px", "marginLeft": "-45px"}}  type={"radio"} placeholder="Prepaid"></input>
                    </div>
                </div>
            </div>

            <h1>Package Details</h1>

            <div className='custom_order_form'>

                <div className='custom_order_input_container'>
                    <div className='input_container'>
                        <label>Dead Weight</label>
                        <br></br>
                        <input className='form-control' value={FormValue.pakage_weight} onChange={(e)=> handleChange(e)} name='pakage_weight' type={"text"} placeholder="Dead Weight"></input>
                        <br></br>
                        <p style={{"color": "black"}}>(Max. 3 digits after decimal place)
                        Note: The minimum chargeable weight is 0.50 Kg</p>
                    </div>
                </div>
            </div>

            <br></br>
            <button onClick={(e)=>handleSubmit(e)} style={{"float": "right", "background": "black", "color": "white", "padding": "10px"}}>Add Order</button>

            {log_err ? (<>
                <span style={{color:"red"}}>Pease Fillup all filed correclty!</span>
            </>) : (<></>)}
        </div>
  )
}

export default CustomOrder