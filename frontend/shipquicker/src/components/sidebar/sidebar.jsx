import React, {useState} from 'react'
import './sidebar.css'
import homeIcon from '../../images/homepage_active.svg'
import dashboardIcon from '../../images/dashboard_active.svg'
import ordersIcon from '../../images/orders_active.svg'
import returnsIcon from '../../images/returns_active.svg'
import NDRIcon from '../../images/process_ndr_active.svg'
import SettingIcon from '../../images/settings_active.svg'
import helpIcon from '../../images/support_active.svg'

import {Link} from 'react-router-dom'

// "swiftplugin",

function Sidebar() {

  return (
    <div className="sidebar">
        <div className="logo_">
          SQ
        </div>
          <ul className='sideBar_links'>
            <Link to='/'>
              <li className='sidebar_link'>
                <img height={'35px'} width={'35px'} src={homeIcon}></img> <span>Home</span>
              </li>
            </Link>
            <Link to='/'>
              <li  className='sidebar_link'> 
                <img height={'35px'} width={'35px'} src={dashboardIcon}></img> <span>Dashboard</span>
              </li>
            </Link>
            <Link to='/orders_dashboard'>
              <li className='sidebar_link'>
                <img height={'35px'} width={'35px'} src={ordersIcon}></img> <span>Orders</span>
              </li>
            </Link>
            <Link to='/orders_dashboard'>
              <li className='sidebar_link'>
                <img height={'35px'} width={'35px'} src={returnsIcon}></img> <span>Returns</span>
              </li>
            </Link>
            <Link to='/orders_dashboard'>
              <li className='sidebar_link'>
                <img height={'35px'} width={'35px'} src={NDRIcon}></img> <span>NDR</span>
              </li>
            </Link>
            <Link to='/orders_dashboard'>
              <li className='sidebar_link'>
                <img height={'35px'} width={'35px'} src={SettingIcon}></img> <span>Settings</span>
              </li>
            </Link>
            <Link to='/orders_dashboard'>
              <li className='sidebar_link'>
                <img height={'35px'} width={'35px'} src={helpIcon}></img> <span>Help & Support</span>
              </li>
            </Link>
          </ul>
        </div>
  )
}

export default Sidebar