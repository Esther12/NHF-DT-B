const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  email: { type: String, require: true },
  date: { type: Date, default: Date.now },
  content: { type: String, require: true }
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
