import axios from "axios";
import { swal } from "sweetalert";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const res = await axios.post("https://pizza-server-tls3.onrender.com/api/users/register", user);
    console.log(res);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAIL", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const res = await axios.post("https://pizza-server-tls3.onrender.com/api/users/login", user);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: res.data });
    localStorage.setItem("currentUser", JSON.stringify(res.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem('cartItems');
  window.location.href = "/login";
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });
  try {
    const res = await axios.get("https://pizza-server-tls3.onrender.com/api/users/getallusers");
    dispatch({ type: "GET_USERS_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_USERS_FAIL", payload: err });
  }
};

export const deleteUser = (userid) => async (dispatch) => {
  try {
    const res = axios.post("https://pizza-server-tls3.onrender.com/api/users/deleteuser", { userid });
    swal("User Delete Successfully", "success");
    window.location.href = "/admin";
    console.log(res);
  } catch (error) {
    swal("Error While Deleting Pizza");
  }
};

export const updateAdmin = (userid) => async (dispatch) => {
  try {
    const res = axios.post("https://pizza-server-tls3.onrender.com/api/users/updateadmin", { userid });
    swal("User Updated Successfully", "success");
    window.location.href = "/admin";
    console.log(res);
  } catch (error) {
    swal("Error While Deleting Pizza");
  }
};
