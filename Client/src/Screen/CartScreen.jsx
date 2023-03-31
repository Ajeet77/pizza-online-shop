import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FiMinusCircle, FiPlusCircle, FiTrash } from "react-icons/fi";
import { addToCart, deleteFromCart } from "../Action/CartAction";
import Checkout from "../Components/Checkout";

function CartScreen() {
  const cartState = useSelector((state) => state.CartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x,items)=> x + items.price, 0)
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h1>Cart Items</h1>
            <Row>
              {cartItems.map((items) => {
                return (
                  <>
                    <Col md={7}>
                      <h5>
                        {items.name} [{items.varient}]
                      </h5>
                      <h6>
                        Price: {items.quantity} X{" "}
                        {items.prices[0][items.varient]} = {items.price}
                      </h6>
                      <h6>
                        Quantity:{" "}
                        <FiMinusCircle
                          style={{ cursor: "pointer" }}
                          className="text-danger"
                          onClick={()=>{
                            dispatch(
                                addToCart(items, items.quantity - 1, items.varient)
                              )
                          }}
                        />{" "}
                        &nbsp; {items.quantity} &nbsp;{" "}
                        <FiPlusCircle
                          className="text-success"
                          style={{ cursor: "pointer" }}
                          onClick={()=>{
                            dispatch(
                                addToCart(items, items.quantity + 1, items.varient)
                              )
                          }}
                        />
                      </h6>
                    </Col>
                    <Col md={5}>
                      <img
                        src={items.image}
                        alt={items.name}
                        style={{ width: "80px", height: "80px" }}
                      />
                      <FiTrash
                        style={{ cursor: "pointer", marginLeft: "20px" }}
                        className="text-danger"
                        onClick={()=>{dispatch(deleteFromCart(items))}}
                      />
                    </Col>
                    <hr />
                  </>
                );
              })}
            </Row>
          </Col>
          <Col md={4}>
            <h1>Payment Info</h1>
            <h4>Sub Total</h4>
            <h4>Rs: {subTotal} /-</h4>
            <Checkout subTotal = {subTotal}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CartScreen;
