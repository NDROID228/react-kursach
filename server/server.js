const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

const PORT = 3003;
const DB_URL =
  "mongodb+srv://NDROID:DNS15022007@clustertest.dnjoj6z.mongodb.net/courseWorkDB";

mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log(`Connected to MongoDB`);
  })
  .then(
    app.listen(PORT, (req, res) => {
      console.log(`Server has been activated on port ${PORT}`);
    })
  )
  .catch((error) => console.log(`DB connection error: ${error}`));

app.get("/msg", cors(), (req, res) => {
    res.json(JSON.stringify({text: "Hello! I`m just a little server >_<"}));
});