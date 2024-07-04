import { GenreModel } from "../models/genre.js";

export const GenreServices = {
  add:async (data) => {
    return GenreModel.create(data);
  },
  getAll:async () => {
    return GenreModel.find();
  },
  getById:async (id) => {
    return GenreModel.findById(id);
  },
  update:async (id, data) => {
    return GenreModel.findByIdAndUpdate(id,data,{ new: true });
  },
  delete:async (id) => {
    return GenreModel.findByIdAndDelete(id);
  },
  getAllSeasonOfAllSeriesByGenreId:async(id)=>{
    
  }
};
