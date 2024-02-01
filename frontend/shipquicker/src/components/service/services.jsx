import React, {useState, useEffect} from 'react'
import axios from 'axios'
import api_url from '../../api_url/api_url.js'
import {Link, useNavigate} from 'react-router-dom'
import Provider from './provider/provider.jsx'

function ServicesProviders() {

    const [providers, setProviders] = useState([])
    const api_route = api_url()
    const token = localStorage.getItem("token")

    useEffect(()=>{
        axios.get(`${api_route}/providers/`, {
            headers: {
              'Authorization': `token ${token}` 
            }
          })
        .then((res)=>{
            setProviders(res.data)
        })
        .catch((err)=>{
        })
    }, [])


    return (
        <div className='serives_providers'>
            <h1>Shopping Carts</h1>
            <p>Connect the Shopping Cart on which your online store is build.</p>
            <div className='services'>
                {providers.map((provider, index)=>(
                    <Provider key={index} provider={provider} />
                ))}
            </div>
        </div>
    )
}

export default ServicesProviders