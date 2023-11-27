const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["conjugation", "grammar", "orthography"],
    default: "grammar",
  },
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;