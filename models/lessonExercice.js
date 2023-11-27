const mongoose = require("mongoose");

const lessonExerciceSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: [""],
    required: true,
  },
  answers: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubjectLesson",
    required: true,
  }
});

const LessonExercice = mongoose.model("LessonExercice", lessonExerciceSchema);

module.exports = LessonExercice;
