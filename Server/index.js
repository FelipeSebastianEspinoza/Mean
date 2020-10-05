const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', function () {  
  console.log('Mongoose: conectado a ' + 'mongodb://127.0.0.1:27017/mydb');
}); 
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose: error de conexion: ' + err);
}); 
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose: conexion desconectada'); 
});
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Se ha desconectado Mongoose por cierre del programa'); 
    process.exit(0); 
  }); 
}); 

const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/user", require("./routes/user.route"));
app.use("/post", require("./routes/post.route"));
const port = 3000 | process.env.PORT;

app.listen(port);
