import React, {useState, useEffect} from 'react'
import './style.css'

function Profile() {

    const data = localStorage.getItem("user");

    const user = JSON.parse(data)

    return (
        <div className='profile'>
            <div className='profile-info'>
                <h1>{user.username}</h1>
                <h1>{user.email}</h1>
                <br></br>
                <button className="btn btn-dark">Edit</button>
            </div>
            <div className='divider-line'></div>
            <div>
                <h1>Wallet Funds {user.wallet.available_funds}$</h1>
                <br></br>
                <button className="btn btn-dark">Add Funds</button>
            </div>
        </div>
    )
}

export default Profile