import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";
import { filterPizza } from "../Action/PizzaAction";

const Filters = () => {
  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch();

  return (
    <>
      <Form>
        <Row>
          <Col>
            <Form.Control
              value={searchKey}
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
              placeholder="Search"
            />
          </Col>
          <Col>
            <select
              className="form-select"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option>All</option>
              <option>veg</option>
              <option>nonveg</option>
            </select>
          </Col>
          <Col>
            <Button
              onClick={() => {
                dispatch(filterPizza(searchKey, category));
              }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Filters;
