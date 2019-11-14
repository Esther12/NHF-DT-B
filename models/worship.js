const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const worshipSchema = new Schema({
  song_of_prasis: { type: String, require: true },
  congerPrayer: { type: String, require: true },
  Stitle: { type: String, require: true },
  Spassage: { type: String, require: true },
  preacher: { type: String, require: true }
});

const Worship = mongoose.model("Worship", worshipSchema);

module.exports = Worship;
