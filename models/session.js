const mongoose = require("mongoose");
const { Schema } = mongoose;

const SessionSchema = new Schema({
  uuid: { type: String, required: true, unique: true },
  avatar: { type: Number, required: true },
  name: { type: String, required: true },
});

const Session = mongoose.model('Session', SessionSchema);


module.exports = Session;
