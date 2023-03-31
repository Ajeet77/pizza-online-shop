import React from "react";
import StripCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../Action/OrderAction";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";

const Checkout = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
  };
  return (
    <>
      {loading && <Loader />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="order place success" />}
      <StripCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51MaCL2SE8PLLKeVCc9aNy4JhbkNLLI8YmVNJl4uXkHHu9ZL3Hqa6mFu5xL5At7dFLaiGQqemRJn1m056lVqiUjMa003YX4lO7s"
        currency="INR"
      >
        <Button>Pay Now</Button>
      </StripCheckout>
    </>
  );
};

export default Checkout;
