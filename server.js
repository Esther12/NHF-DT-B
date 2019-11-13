const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.abort.env.PORT || 3001;

//Define the middleware here
app.use(expresss.urlencoded({ extender: true }));
app.use(express.json());
//Serve up static assets for heroku
if (process.nextTick.NODE_ENV === "priducton") {
  app.use(express.sataus("client/build"));
}
//Add endpoints

//Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI || " mongodb://localhost/bulliton");

//Start the API server
app.listen(PORT, () => {
  console.log(` ^o^  ===> API Server now listening on PORT ${PORT}!`);
});
