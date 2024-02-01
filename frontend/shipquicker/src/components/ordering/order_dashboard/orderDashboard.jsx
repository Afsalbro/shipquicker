import React, { useState, useEffect } from 'react'
import './style.css'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import api_url from '../../../api_url/api_url'
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function OrderDashboard() {

  const [orders, setOrder] = useState([])
  const api_url_ = api_url()

  const token = localStorage.getItem("token");

  const loadOrder = () => {
    axios.get(`${api_url_}/custom_orders/`, {
      headers: {
        'Authorization': `token ${token}` 
      }
    })
    .then((res)=>{
      console.log(res.data);
      setOrder(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    loadOrder()
  }, [])





  return (
    <div className='dashboard'>

      <div className='dashborad_navbar'>
        <h1>Order Dashboard</h1>
        <Link to={'/select_order_type/custom_order'}>
          <button>Add Order</button>
        </Link>
      </div>
    
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Order Details</th>
          <th>Order Details</th>
          <th>Package Details	</th>
          <th>Payments</th>
          <th>Pickup Address</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { orders.map((order, index)=>(
          <tr>
            <td>
              <a href=''>{order.id}</a>
              <p>{order.created_at}</p>
              <p>{order.order_channel}</p>
            </td>
            <td>
              <p>
                {order.order_from_user}
                <br></br>
                {order.phone_number}
              </p>
            </td>
            <td>
              Dead Weight {order.pakage_weight}
            </td>
            <td>
              {order.unit_price}₹
              <br></br>
              PrePaid
            </td>
            <td>
              <a href=''>Primary</a>
            </td>
            <td>
              <a href=''>New</a>
            </td>
            <td>
              <button className='add_order_from_tabel_ship'>Ship Now</button>
            </td>
          </tr>
        )) }
      </tbody>
    </Table>

    <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      </div>
  )
}

export default OrderDashboard