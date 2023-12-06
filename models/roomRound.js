const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoomRoundSchema = new Schema({
  room_id: { type: Schema.Types.ObjectId, ref: "Room", required: true },
  type: {
    type: String,
    enum: ["adding", "removing"],
    defautl: "adding",
  },
  status: {
    type: String,
    enum: ["initialized", "in_progress", "fnished"],
    default: "initialized",
  },
  current_player: { type: Number, default: 0 },
  common_pool: { type: Number, default: 0 },
  hidden_bearing: { type: Number, default: null },
});

const RoomRound = mongoose.model("RoomRound", RoomRoundSchema);

module.exports = RoomRound;
