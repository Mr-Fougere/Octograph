const mongoose = require("mongoose");

const subjectLessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
  },
  validated: {
    type: Boolean,
    required: true,
    default: false,
  },
  level: {
    type: String,
    required: true,
    enum: ["beginner", "intermediate", "advanced"],
  },
});

const SubjectLesson = mongoose.model("SubjectLesson", subjectLessonSchema);

module.exports = SubjectLesson;
