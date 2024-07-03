import mongoose from "mongoose";
const file_schema = mongoose.Schema(
  {
    original_name: {
      type: String,
      required: true,
    },
    current_name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    size: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
export const FileModel = mongoose.model("File", file_schema);
