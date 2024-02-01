import React from 'react'
import '../styles.css'

function Provider({provider}) {
  return (
    <div className='provider'>
      <img width={"70px"} src={provider.provder_image}></img>
      <h3>{provider.provider_name}</h3>
      <br></br>
      <button className='btn btn-black'>Add</button>
    </div>
  )
}

export default Provider