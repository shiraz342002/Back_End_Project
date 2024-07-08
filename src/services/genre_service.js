import { GenreModel } from "../models/genre.js";
import { GenreSeriesModel } from "../models/genre_series.js";
import { SeasonModel } from "../models/season.js";
import { SeriesModel } from "../models/series.js";
export const GenreServices = {
  add:async (data) => {
    return GenreModel.create(data);
  },
  getAll:async(page,limit)=>{
    const skip = (page - 1) * limit
    const genre = await GenreModel.find().skip(skip).limit(limit);
    return genre;
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
  getAllSeriesByGenreId:async(id)=>{
    console.log("Genre ID:", id);
    const genre = await GenreModel.findById(id);
    if(!genre){
      return "No genre Found";
    }
    const genre_series=await GenreSeriesModel.find({genre_id:id})
    if(!genre_series){
      return "No genre series Found"
    }
    console.log(genre_series); 
    const seriesId = genre_series[0].series_id;
    const series = await SeriesModel.findById(seriesId);
    // console.log(series);
    if(!series){
      return "No series Found"
    }
    return series
    },
    getAllSeasonOfAllSeriesByGenreId:async(id)=>{
      console.log("Genre ID:", id);
      const genre = await GenreModel.findById(id);
      if(!genre){
        return "No genre Found";
      }
      const genre_series=await GenreSeriesModel.find({genre_id:id})
      if(!genre_series){
        return "No genre series Found"
      }
      console.log(genre_series); 
      const seriesId = genre_series[0].series_id;
      const series = await SeriesModel.findById(seriesId);
      console.log(series);
      if(!series){
        return "No series Found"
      }
      const seasons = await SeasonModel.find({series_id:series._id });     
      if(!seasons){
        return "No Seasons Found"
      }
      return seasons
    }
    
  };
