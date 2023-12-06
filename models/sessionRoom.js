const mongoose = require("mongoose");
const { Schema } = mongoose;

const SessionRoomSchema = new Schema({
  status: { type: String, required: true },
  life_points: { type: Number, default: 3},
  session_id: { type: Schema.Types.ObjectId, ref: "Session", required: true },
  room_id: { type: Schema.Types.ObjectId, ref: "Room", required: true },
  individual_pool: { type: Number, default: 30 },
  round_order: { type: Number, default: 0 },
  last_add: { type: Number, default: 0 },
});

const SessionRoom = mongoose.model("SessionRoom", SessionRoomSchema);

module.exports = SessionRoom;
