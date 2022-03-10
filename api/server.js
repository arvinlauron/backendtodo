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
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/todo", todoRoutes)

const port = 3001 || process.env.PORT;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
