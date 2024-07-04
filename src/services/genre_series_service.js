import { GenreSeriesModel } from "../models/genre_series.js";
export const GenreSeriesServices = {
  add:async (data) => {
    return GenreSeriesModel.create(data);
  },
  getAll:async () => {
    return GenreSeriesModel.find();
  },
  getById:async (id) => {
    return GenreSeriesModel.findById(id);
  },
  update:async (id, data) => {
    return GenreSeriesModel.findByIdAndUpdate(id,data,{ new: true });
  },
  delete:async (id) => {
    return GenreSeriesModel.findByIdAndDelete(id);
  },
};
