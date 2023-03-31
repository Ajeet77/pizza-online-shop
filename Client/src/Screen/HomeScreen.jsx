import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../Action/PizzaAction";
import Error from "../Components/Error";
import Filters from "../Components/Filters";
import Loader from "../Components/Loader";
import Pizza from "../Components/Pizza";


export default function HomeScreen() {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <Container>
        {loading ? (
          <Loader/>
        ) : error ? (
          <Error>Error while fetching data {error}</Error>
        ) : (
          <Row>
            <Filters/>
            {pizzas.map((pizza, index) => (
              <Col key={index} md={4}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}
