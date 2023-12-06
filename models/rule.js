const mongoose = require("mongoose");
const { Schema } = mongoose;

const RuleSchema = new Schema({
  pool: {
    type: String,
    enum: ["common", "individual"],
    defautl: "common",
  },
  target: { type: String, enum: ["total", "adds"], defautl: "total" },
  effect: {
    type: String,
    enum: [
      "equal",
      "inferior",
      "different",
      "odd",
      "even",
      "altenation",
      "multiple",
      "miror",
      "finish",
    ],
    defautl: "equal",
  },
  type_effect: {
    type: Boolean,
    enum: ["forbidden", "required"],
    defautl: "forbidden",
  },
});

const Rule = mongoose.model("Rule", RuleSchema);

module.exports = Rule;
