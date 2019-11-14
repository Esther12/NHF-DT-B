const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3001;
const routes = require("./endPoints");
require("dotenv").config();

//Define the middleware here
app.use(express.urlencoded({ extender: true }));
app.use(express.json());
//Serve up static assets for heroku
//if (process.env.NODE_ENV === "priducton") {
app.use(express.sataus("client/build"));
//}
//Add endpoints
app.use(routes);
//Connect to the Mongo DB

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connection successful!"))
  .catch(err => console.error(err));

//Start the API server
app.listen(PORT, () => {
  console.log(` ^o^  ===> API Server now listening on PORT ${PORT}!`);
});
