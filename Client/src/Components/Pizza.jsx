import React, { useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../Action/CartAction";

export default function Pizza({ pizza }) {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "18rem", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: "250px", cursor: "pointer" }}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={6}>
                <div>
                  <h6>Varients</h6>
                  <select
                    value={varient}
                    onChange={(e) => {
                      setVarient(e.target.value);
                    }}
                  >
                    {pizza.varients.map((varient, index) => {
                      return (
                        <option key={index} value={varient}>
                          {varient}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <h6>Quantity</h6>
                  <select
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  >
                    {[...Array(10).keys()].map((v, i) => {
                      return (
                        <option key={v} value={i + 1}>
                          {i + 1}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </Col>
            </Row>
          </Card.Text>
          <Col md={6}>Price: {pizza.prices[0][varient] * quantity}</Col>
          <Col md={6}>
            <Button
              onClick={addToCartHandler}
              className="bg-warning text-white"
            >
              Add to cart
            </Button>
          </Col>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              src={pizza.image}
              style={{ height: "250px" }}
            />
          </div>
          <div>
            <h5>Description</h5>
            <h6>{pizza.description}</h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
