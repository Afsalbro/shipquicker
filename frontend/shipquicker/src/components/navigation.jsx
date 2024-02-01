import {Link} from 'react-router-dom'

export const Navigation = ({isLogin, setLogin}) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'  style={isLogin ? {'backgroundColor': "transparent", "color": "black", marginLeft: '10%', justifyContent: 'center', width: '90%', 'boxShadow': 'none'} : {'backgroundColor': "#0004", "color": "white"}}>
      <div className='container'>
        <div className='navbar-header'>

          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          {isLogin == true ? 
          '' :  <Link style={{ "color": "white", "textTransform":"none"}}  className='navbar-brand page-scroll' to={'/'}>
          ShipQuickr
          </Link>}
         {' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a style={isLogin ? { "color": "black"} : { "color": "white"}} href='#features' className='page-scroll'>
                Features
              </a>
            </li>
            <li>
              <a style={isLogin ? { "color": "black"} : { "color": "white"}} href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a style={isLogin ? { "color": "black"} : { "color": "white"}} href='#portfolio' className='page-scroll'>
                Pricing
              </a>
            </li>
         
            {isLogin == true ? (
              <>
                <li>
                  <Link style={isLogin ? { "color": "black"} : { "color": "white"}}  to='/profile' className='page-scroll'>
                    Profile
                  </Link>
                </li> 
                <li>
                  <Link style={isLogin ? { "color": "black"} : { "color": "white"}}  to='/select_order_type' className='page-scroll'>
                    Add Order
                  </Link>
                </li> 
                <li>
                  <a href='' onClick={
                    (e)=> { 
                      e.preventDefault()
                      setLogin(false)
                      localStorage.removeItem("token")
                    }
                  } style={isLogin ? { "color": "black"} : { "color": "white"}}  className='page-scroll'>
                    logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link style={isLogin ? { "color": "black"} : { "color": "white"}}  to={'/login'}>
                    Login
                  </Link>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  )
}
