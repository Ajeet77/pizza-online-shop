import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, updateUser } from "../Action/UserAction";
import Error from "./Error";
// import Loader from "./Loader";
import Success from "./Success";

const UpdateUser = ({ match }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false);
  const getUserByState = useSelector((state) => state.getUserByIdReducer);
  const { user } = getUserByState;
  const dispatch = useDispatch();

  const updateUserState = useSelector((state) => state.updatedUserByIdReducer);
  const { updateError, updateSuccess } = updateUserState;
  useEffect(() => {
    if (user) {
      if (user) {
        setName(user.name);
        setEmail(user.email);
        setAdmin(user.isAdmin);
      } else {
        dispatch(getUserById(match.params.userid));
      }
    } else {
      dispatch(getUserById(match.params.userid));
    }
  }, [user, dispatch, match.params.userid]);

  const submitForm = (e) => {
    e.preventDefault();
    const updatedUser = {
      _id: match.params.userid,
      name,
      email,
      admin
    };
    dispatch(updateUser(updatedUser));
  };

  return (
    <>
      {/* {updateLoading && <Loader />} */}
      {updateError && <Error error="Unable to update" />}
      {updateSuccess && <Success success="Update Successfully" />}
      <Form onSubmit={submitForm}>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              Email
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              Admin
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              value={admin}
              onChange={(e) => setAdmin(e.target.value)}
            />
          </Col>
          <Row>
            <Col md={2}>
              <Button type="submit" className="mb-2">
                Update
              </Button>
            </Col>
          </Row>
        </Row>
      </Form>
    </>
  );
};

export default UpdateUser;
