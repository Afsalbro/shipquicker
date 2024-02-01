import { Link } from "react-router-dom"


export const Header = (props) => {
  return (
    <header id='header' style={{"height": "80vh"}}>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  ShipQuickr - Shipping Made Easy
                </h1>
                <p>India’s #1 shipping solution, trusted by over 1 Lac brands and entrepreneurs
for lowest shipping rates, widest reach and best customer service.</p>
                  <Link style={{"background": "#01A0A9"}} className='btn btn-custom btn-lg page-scroll' to='/select_order_type' >
                    Add Order
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
