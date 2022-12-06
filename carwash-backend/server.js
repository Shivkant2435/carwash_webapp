var express = require('express');
var cors = require('cors');
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;
require('dotenv').config({path: __dirname + '/.env' })

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));

var Users = require('./Routes/Users');
var Places = require('./Routes/Place');

app.use('/users',Users);
app.use('/places',Places);

app.listen(port,function(){
    console.log("Server is running on port: "+port);
});