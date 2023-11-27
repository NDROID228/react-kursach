const cors = require("cors");
const mongoose = require("mongoose");
const multer = require('multer');
const fs = require("fs");
const bodyParser = require("body-parser");
const Article = require("./schemas/articleSchema");

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded!");
});

const PORT = 3003;
const DB_URL =
  "mongodb+srv://NDROID:DNS15022007@clustertest.dnjoj6z.mongodb.net/chessyDB";

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
  res.json(JSON.stringify({ text: "The title description was supposed to be there..." })); // Hello! I`m just a little server >_<. 
});

app.get("/getArticlesPreview", cors(), (req, res) => {
  let conn = mongoose.connection;
  let getDataPromise = new Promise((resolve, reject) => {
    // console.log("log from promise");
    Article.find(
      {
        
      },
      {
        _id: 1,
        title: 1,
        description: 1,
      }
    )
      .exec()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

  getDataPromise
    .then((resolve) => {
      // console.log("log from resolve");
      let result = JSON.stringify(resolve);
      res.json(result);
    })
    .catch((err) => {
      // console.log("log from error");
      throw err;
    });
});

app.put("/getArticleContent", cors(), (req, res) => {
  const reqObj = req.body.ID.articleID;
  let conn = mongoose.connection;
  let getDataPromise = new Promise((resolve, reject) => {
    // console.log("log from promise");
    Article.findById(reqObj)
      .exec()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

  getDataPromise
    .then((resolve) => {
      // console.log("log from resolve");
      let result = JSON.stringify(resolve);
      res.json(result);
    })
    .catch((err) => {
      // console.log("log from error");
      res.status(500);
      console.log(err);
    });
});
