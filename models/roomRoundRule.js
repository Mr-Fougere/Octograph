const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoomRoundRuleSchema = new Schema({
  room_round_id: { type: Schema.Types.ObjectId, ref: 'RoomRound', required: true },
  rule_id: { type: Schema.Types.ObjectId, ref: 'Rule', required: true },
  random_number: { type: Number, required: true },
});

const RoomRoundRule = mongoose.model('RoomRoundRule', RoomRoundRuleSchema);

module.exports = SubjectLesson;
