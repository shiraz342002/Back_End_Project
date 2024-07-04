import mongoose from "mongoose";
const genre_series_schema = mongoose.Schema({
  genre_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Genre",
  },
  series_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Series",
  },
});
export const GenreSeriesModel = mongoose.model( "Genre Series", genre_series_schema);
 
 

