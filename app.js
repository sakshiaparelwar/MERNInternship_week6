const mongoose = require("mongoose");
const express = require("express");
const app = express();
const foodRoutes = require("./routes/FoodRoutes");
const port = 5000;
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Database connected successfully!!!");
  })
  .catch((e) => {
    console.log("Error connecting database", e);
  });

app.use(express.json());
app.use(cors());
app.use("/foodlists", foodRoutes);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
