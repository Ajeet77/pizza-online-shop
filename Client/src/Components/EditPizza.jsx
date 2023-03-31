import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Components/Error";
import Loader from "../Components/Loader";
import Success from '../Components/Success';
import { getPizzaById, updatePizza } from "../Action/PizzaAction";
function EditPizza({ match }) {
  const [name, setName] = useState("");
  const [smallPrice, setsmallPrice] = useState();
  const [mediumPrice, setmediumPrice] = useState();
  const [largePrice, setlargePrice] = useState();
  const [image, setimage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const getPizzaByState = useSelector((state) => state.getPizzaByIdReducer);
  const { pizza } = getPizzaByState;
  const dispatch = useDispatch();

  const updatePizzaState = useSelector((state) => state.updatePizzaByIdReducer);
  const { updateLoading, updateError, updateSuccess } = updatePizzaState;
  useEffect(() => {
    if (pizza) {
      if (pizza._id === match.params.pizzaid) {
        setName(pizza.name);
        setDescription(pizza.description);
        setCategory(pizza.category);
        setimage(pizza.image);
        setsmallPrice(pizza.prices[0]["small"]);
        setmediumPrice(pizza.prices[0]["medium"]);
        setlargePrice(pizza.prices[0]["large"]);
      } else {
        dispatch(getPizzaById(match.params.pizzaid));
      }
    } else {
      dispatch(getPizzaById(match.params.pizzaid));
    }
  }, [pizza, dispatch, match.params.pizzaid]);

  const submitForm = (e) => {
    e.preventDefault();
    const updatedPizza = {
      _id: match.params.pizzaid,
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        large: largePrice,
      },
    };
    dispatch(updatePizza(updatedPizza));
  };
  return (
    <>
      <div>
        {updateLoading && <Loader />}
        {updateError && <Error error="update pizza error" />}
        {updateSuccess && <Success success="Pizza Added Successfully" />}
        <Form onSubmit={submitForm} className="bg-light">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Small Prices</Form.Label>
                <Form.Control
                  type="text"
                  value={smallPrice}
                  onChange={(e) => setsmallPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Medium Prices</Form.Label>
                <Form.Control
                  type="text"
                  value={mediumPrice}
                  onChange={(e) => setmediumPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Large Prices</Form.Label>
                <Form.Control
                  type="text"
                  value={largePrice}
                  onChange={(e) => setlargePrice(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add Image URL"
                value={image}
                onChange={(e) => setimage(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Discription</Form.Label>
            <Form.Control
              placeholder=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Category</Form.Label>
            <Form.Control
              placeholder=""
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </>
  );
}
export default EditPizza;
