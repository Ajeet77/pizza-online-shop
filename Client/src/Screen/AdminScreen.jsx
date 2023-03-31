import React, {useEffect} from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import {Route, Switch} from "react-router-dom"
import AddNewPizza from "../Components/Admin/AddNewPizza";
import Orderlist from "../Components/Admin/Orderlist";
import Pizzalist from "../Components/Admin/Pizzalist";
import Userslist from "../Components/Admin/Userslist";
import EditPizza from "../Components/EditPizza";
// import UpdateUser from "../Components/UpdateUser";

export default function AdminScreen({history}) {
    const userState = useSelector(state=>state.loginUserReducer)
    const {currentUser} = userState
    useEffect(()=>{
        if(localStorage.getItem('currentUser') === null || !currentUser.isAdmin) {
            window.location.href = '/'
        }
    },[currentUser])
  return (
    <Container>
        <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
      <Row>
        <Col md={2}>
          <ButtonGroup style={{ minHeight: "400px" }} vertical>
            <Button onClick={()=>history.push('/admin')}>All Users</Button>
            <Button onClick={()=>history.push('/admin/pizzalist')}>All Pizzas</Button>
            <Button onClick={()=>history.push('/admin/addnewpizza')}>Add New Pizza</Button>
            <Button onClick={()=>history.push('/admin/orderlist')}>All Orders</Button>
          </ButtonGroup>
        </Col>
        <Col md={10}>
        <Switch>
            <Route path='/admin' component = {Userslist} exact />
            <Route path='/admin/userlist' component = {Userslist} exact />
            <Route path='/admin/editpizza/:pizzaid' component = {EditPizza} exact />
            <Route path='/admin/pizzalist' component = {Pizzalist} exact />
            <Route path='/admin/addnewpizza' component = {AddNewPizza} exact />
            <Route path='/admin/orderslist' component = {Orderlist} exact />
            {/* <Route path='/admin/updateuser/:userid' component = {UpdateUser} exact /> */}
        </Switch>
        </Col>
      </Row>
    </Container>
  );
}
