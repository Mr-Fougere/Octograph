const mongoose = require("mongoose");
const { Schema } = mongoose;

const GAGES = ["shot", "sip", "bottoms_up", "special_cocktail"];

const RoomConfigurationSchema = new Schema({
  room_id: { type: Schema.Types.ObjectId, ref: "Room", required: true },
  available_modes: {
    type: String,
    enum: ["adding", "removing", "all"],
    default: "adding",
  },
  minimal_action: { type: Number, default: 1 },
  maximal_action: { type: Number, default: 5 },
  available_place: { type: Number, default: 8 },
  time_action: { type: Number, default: 10 },
  lose_penality: {
    type: String,
    enum: GAGES,
    default: "sip",
  },
  defeat_penality: {
    type: String,
    enum: GAGES,
    default: "bottoms_up",
  },
  win_reward: {
    type: String,
    enum: GAGES,
    default: "shot",
  },
  multiple_lose_enable: { type: Boolean, required: true },
  secret_bearing: { type: Boolean, required: true },
  hidden_slots: {
    type: String,
    enum: ["individual", "common", "both"],
    default: "individual",
  },
});

const RoomConfiguration = mongoose.model(
  "RoomConfiguration",
  RoomConfigurationSchema
);

module.exports = RoomConfiguration;
