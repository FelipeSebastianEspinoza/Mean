const mongoose = require("mongoose");
const dbURL = require("./properties").DB;
mongoose.set("useCreateIndex", true);

module.exports = () => {
  
  mongoose
    .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Mongo connected on ${dbURL}`))
    .catch((err) => console.log(`Connection ahs error ${err}`));

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log(`Mongo is disconnected`);
      process.exit(0);
    });
  });

  mongoose.connection.on("error", function (err) {
    console.log("Mongoose: error de conexion: " + err);
  });

  mongoose.connection.on('disconnected', function () {  
    console.log('Mongoose: conexion desconectada'); 
  });
};
