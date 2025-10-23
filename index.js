const postController=require("./controller/postController");
const errorHandler=require("./middleware/errorHandler");
const postRoutes=require("./routes/post");


const path=require("path");

var http=require("http");

require("dotenv").config();

let port=process.env.PORT;
let host=process.env.HOST;

var url=require('url');
var fs=require('fs');

var bodyParser=require("body-parser");
var express=require("express");
var app=express();
app.set("view engine","hbs");
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended:true
}));
app.set('view engine', 'ejs');
app.use(errorHandler);
app.use("/",postRoutes);
app.listen(port,host,(err)=>{
    if(err){console.log("Error here");}
    console.log(`Listening....${host}:${port}`);
});

const mongoose=require("mongoose");
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/test');


