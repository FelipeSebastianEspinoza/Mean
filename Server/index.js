const cors = require("cors");
const userRoute = require("./routes/user.route");
const postRoute = require("./routes/post.route");
const express = require("express");
const properties = require("./config/properties");
const DB = require("./config/db");

DB();

const app = express();
const router = express.Router();

const bodyParser = require("body-parser");
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());
app.use("/api", router);

userRoute(router);
postRoute(router);

router.get("/", (req, res) => {
  res.send("Index");
});

 
app.use(router);

app.listen(properties.PORT, () =>
  console.log(`Server running on port ${properties.PORT}`)
);
