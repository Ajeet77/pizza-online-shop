const express = require("express");
const morgan = require("morgan");
const path = require("path");
require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const app = express();

//dotenv config
dotenv.config();
//connection
connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//route
app.use("/api/pizzas", require("./routes/pizzaRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

app.get("/", (req, res) => {
  res.send("Hello From Node Server");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
