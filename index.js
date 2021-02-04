process.env.NODE_ENV = process.env.NODE_ENV || "development";
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');


const envConfig = require("./config/server_env");

const booksController = require("./controller/bookcontroller");

app.get('/', (req,res) => {
    res.send({Project: "MERN CRUD"})
});


mongoose
  .connect(envConfig[process.env.NODE_ENV].database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected");
    app.listen(envConfig[process.env.NODE_ENV].domain_port, () => {
      console.log(
        "Server running on port " + envConfig[process.env.NODE_ENV].domain_port
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });


  app.use(bodyParser.json())


  app.use("/books", booksController); 
  

  


