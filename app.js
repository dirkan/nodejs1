// jshint esversion:6
/*

  1. npm init
  2. npm install express
  npm install body-parser
  npm install ejs
  nodemon calculator.js
*/

const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.use (bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get('/', (req, res) => {
    var d = new Date().getDay();
    var dnames = ["sun","mon","tue","wed","thu","fri","sat"];

    res.render ( "list", { dayofweek : dnames[d] } );
});

app.listen(port, () => console.log(`listening on port ${port}!`));
