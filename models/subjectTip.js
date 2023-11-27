const mongoose = require("mongoose");

const subjectTipsSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
  },
});

const SubjectTip = mongoose.model("SubjectTip", subjectTipsSchema);

module.exports = SubjectTip;
