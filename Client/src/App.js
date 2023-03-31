import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NavBar from "./Components/NavBar";
import Policy from "./Components/Policy";
import TopBar from "./Components/TopBar";
import AdminScreen from "./Screen/AdminScreen";
import CartScreen from "./Screen/CartScreen";
import HomeScreen from "./Screen/HomeScreen";
import Login from "./Screen/Login";
import OrderScreen from "./Screen/OrderScreen";
import Register from "./Screen/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <NavBar />
        <Switch>
        <Route path="/admin" component={AdminScreen} />
          <Route path="/login" component={Login} exact />
          <Route path="/orders" component={OrderScreen} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/policy" component={Policy} exact />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/cart" component={CartScreen} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
