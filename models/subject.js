const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending", // Valeur par défaut si aucune n'est fournie
  },
});

module.exports = mongoose.model("Subject", subjectSchema);
