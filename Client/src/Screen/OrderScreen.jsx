import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../Action/OrderAction";
import Loader from '../Components/Loader'
import Error from '../Components/Error'

function OrderScreen() {
    const orderState = useSelector(state=>state.getUserOrdersReducer)
    const {loading, error, orders} = orderState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
  return <>
    <h1>Your Orders</h1>
    {loading && <Loader/>}
    {error && <Error error = 'something went wrong'/>}
    {
        orders && orders.map((order)=>{
            return <Row>
                <Col md = {4}>
                    {order.orderItems.map(item =>{
                       return <h5>{item.name} [{item.varient}] * {item.quantity}</h5>
                    })}
                </Col>
                <Col md = {4}>
                    <h4>Address</h4>
                    <h6>Street : {order.shippingAddress.street}</h6>
                    <h6>City : {order.shippingAddress.city}</h6>
                    <h6>Pincode : {order.shippingAddress.zip}</h6>
                    <h6>Country : {order.shippingAddress.country}</h6>
                </Col>
                <Col md = {4}>
                    <h4>Order Info</h4>
                    <h4>Order Amount</h4>
                    <h6>Transection Id : {order.transectionId}</h6>
                    <h6>Order id : {order._id}</h6>
                </Col>
            </Row>
        })
    }
  </>;
}

export default OrderScreen;
