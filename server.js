const Express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

var app = Express();

app.use(cors());

const subjectsRouter = require("./routes/subjects");
const exercicesRouter = require("./routes/lessonExercices");
const tipsRouter = require("./routes/subjectTips");
const lessonRouter = require("./routes/subjectLessons");

app.use("/subjects", subjectsRouter);
app.use("/subject_lessons", lessonRouter);
app.use("/subject_tips", tipsRouter);
app.use("/lesson_exercices", exercicesRouter);


app.listen(3000, () => {});
