const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + 'mongodb://127.0.0.1:27017/mydb');
}); 
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 

const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", require("./routes/user.route"));
const port = 3000 | process.env.PORT;

app.listen(port);
