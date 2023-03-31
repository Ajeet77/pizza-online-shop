import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deliverOrders, getAllOrders } from '../../Action/OrderAction'
import Loader from '../Loader'
import Error from '../Error'
import { Button, Container, Table } from 'react-bootstrap'

const Orderlist = () => {
  const allOrderState = useSelector(state => state.allUserOrdersReducer)
  const {loading, orders, error} = allOrderState
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllOrders())
  },[dispatch])
  return (
    <div>
      <h1>Order List</h1>
      {loading && <Loader/>}
      {error && <Error error = 'Admin Order Fail'/>}
      <Container>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Email</th>
          <th>User Id</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders && orders.map((order)=>{
          return <tr key={order._id}>
            <td>{order._id}</td>
            <td>{order.email}</td>
            <td>{order.transectionId}</td>
            <td>Rs {order.orderAmount}/-</td>
            <td>{order.createdAt.substring(0,10)}</td>
            <td>
              {order.isDelivered ? <h6 className='text-success'>Delivered</h6>
              : <Button className='btn-danger' onClick={dispatch(deliverOrders(order._id))}>Deliver</Button>  
            }
            </td>
          </tr>
        })}
      </tbody>
    </Table>
      </Container>
    </div>
  )
}

export default Orderlist
