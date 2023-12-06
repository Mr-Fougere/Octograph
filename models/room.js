const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoomSchema = new Schema({
  uuid: { type: String, required: true, unique: true },
  access_key: { type: String, required: true },
  status: {
    type: String,
    enum: ["initialized", "", "all"],
    default: "initialized",
  },
  admin_id: { type: Schema.Types.ObjectId, ref: "Session", required: true },
});

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;
