export const Features = (props) => {
  return (
    <div id='features' className='text-center' style={{"background": "#01a0a9", "padding": "20px", "paddingBottom": "80px"}}>
      <div className='container'>
        {/* <div className='col-md-10 col-md-offset-1 section-title'> */}
          <h2 style={{'color': "white", "fontSize": "28px", "marginTop": "25px"}}>We power ecommerce businesses by making shipping easy</h2>
        {/* </div> */}
        <div className='row showOff' style={{"justifyContent": "space-between", "marginTop": "40px"}}>
          {props.data
            ? props.data.map((d, i) => (
                <div style={{"background": "white", "width":"20%", "margin": "0 auto"}} key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  {/* <i className={d.icon}></i> */}
                  <h3 style={{'color': "black"}}>{d.title}</h3>
                  <p style={{'color': "black"}}>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
