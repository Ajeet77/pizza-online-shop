import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers, updateAdmin } from "../../Action/UserAction";
import { Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import Loader from "../Loader";
import Error from "../Error";

const Userslist = () => {
  const allUsersState = useSelector((state) => state.getAllUsersReducer);
  const { loading, users, error } = allUsersState;

  const dispatch = useDispatch();
const dispatch2 = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div>
      <h1>Users List</h1>
      {loading && <Loader />}
      {error && <Error error="Unable to fetch users" />}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.isAdmin ? "Yes" : "No"} <RiAdminFill onClick={()=>dispatch2(updateAdmin(user._id))}/>
                  </td>
                  <td>
                    <AiFillDelete
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() => dispatch(deleteUser(user._id))}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Userslist;
