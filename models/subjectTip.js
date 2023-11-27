const mongoose = require("mongoose");

const subjectTipSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
  },
});

const SubjectTip = mongoose.model("SubjectTip", subjectTipSchema);

module.exports = SubjectTip;
