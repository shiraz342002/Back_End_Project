import mongoose from "mongoose";
const stream_schema = mongoose.Schema(
  {
    episode_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Episode",
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    time: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const StreamModel = mongoose.model("Stream", stream_schema);
