import mongoose from "mongoose";
const genre_schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const GenreModel = mongoose.model("Genre", genre_schema);
