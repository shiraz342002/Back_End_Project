import { GenreSeriesModel } from "../models/genre_series.js";
export const GenreSeriesServices = {
  add: async (data) => {
    return GenreSeriesModel.create(data);
  },
  getAll: async (page, limit) => {
    const skip = (page - 1) * limit;
    let sortOrder;
    if (order === "asc") {
      sortOrder = 1;
    } else {
      sortOrder = -1;
    }
    const genre_series = await GenreSeriesModel.find()
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(limit);
    return genre_series;
  },
  getById: async (id) => {
    return GenreSeriesModel.findById(id);
  },
  update: async (id, data) => {
    return GenreSeriesModel.findByIdAndUpdate(id, data, { new: true });
  },
  delete: async (id) => {
    return GenreSeriesModel.findByIdAndDelete(id);
  },
};
