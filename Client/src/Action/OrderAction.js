import axios from "axios";
import swal from 'sweetalert'
export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().CartReducer.cartItems;
  try {
    const res = await axios.post("/api/orders/placeorder", {
      token,
      subTotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    console.log(res);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAIL" });
    console.log(error);
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({
    type: "USER_ORDER_REQUEST",
  });
  try {
    const res = await axios.post("/api/orders/getuserorder", {
      userid: currentUser._id,
    });
    console.log(res);
    dispatch({
      type: "USER_ORDER_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "USER_ORDER_FAIL",
      payload: error,
    });
  }
};


export const getAllOrders = () => async (dispatch, getState) => {
  // const currentUser = getState().loginUserReducer.currentUser;
  dispatch({
    type: "ALL_ORDER_REQUEST",
  });
  try {
    const res = await axios.get("/api/orders/alluserorders");
    dispatch({
      type: "ALL_ORDER_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "ALL_ORDER_FAIL",
      payload: error,
    });
  }
};

export const deliverOrders = (orderId) => async (dispatch, getState) => {
  // const currentUser = getState().loginUserReducer.currentUser;
  dispatch({
    type: "GET_ALL_ORDER_REQUEST",
  });
  try {
    const res = await axios.post("/api/orders/deliverorder",{orderId});
    console.log(res);
    swal('Deliver Success')
    const order = await axios.get("/api/orders/alluserorders");
    dispatch({
      type: "GET_ALL_ORDER_SUCCESS",
      payload: order.data,
    });
    window.location.href = '/admin/orderlist'
  } catch (error) {
    dispatch({
      type: "GET_ALL_ORDER_FAIL",
      payload: error,
    });
  }
}