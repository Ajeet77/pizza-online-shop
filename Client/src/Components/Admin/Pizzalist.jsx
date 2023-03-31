import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletePizza, getAllPizzas } from "../../Action/PizzaAction";
import Error from "../../Components/Error";
import Loader from "../../Components/Loader";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
// import Pizza from "../../Components/Pizza";

const Pizzalist = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error>Error while fetching data {error}</Error>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SrNo.</th>
              <th>Pizza Name</th>
              <th>Prices</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pizzas &&
              pizzas.map((pizza) => {
                return (
                  <tr>
                    <td>
                      <img
                        src={pizza.image}
                        width="100px"
                        height="100px"
                        alt="logo"
                      />
                    </td>
                    <td>{pizza.name}</td>
                    <td>
                      Small : {pizza.prices[0]["small"]} <br />
                      Medium : {pizza.prices[0]["medium"]} <br />
                      Large : {pizza.prices[0]["large"]}
                    </td>
                    <td>{pizza.category}</td>
                    <td>
                      <Link to={`/admin/editpizza/${pizza._id}`}>
                      <AiFillEdit style={{cursor:'pointer'}} />
                      </Link>
                       &nbsp; <AiFillDelete style={{cursor:'pointer', backgroundColor:'red'}}
                       onClick = {()=>dispatch(deletePizza(pizza._id))}
                       />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default Pizzalist;
