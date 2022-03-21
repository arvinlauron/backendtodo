const express = require("express");
const cors = require("cors");
const app = express();
const todoRoutes = require("./routes/todoRoutes")

require("dotenv").config();
require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://arcane-mountain-29379.herokuapp.com/",
    credentials: true,
  })
);

app.use("/api/todo", todoRoutes)

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
