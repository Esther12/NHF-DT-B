const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const announSchema = new Schema({
  title: { type: String, require: true },
  detial: { type: String, require: true }
});

const Announce = mongoose.model("Announce", announSchema);

module.exports = Announce;
