import {StreamModel} from "../models/stream.js"
import { EpisodeModel } from "../models/episode.js";
import { SeasonModel } from "../models/season.js";
import { SeriesModel } from "../models/series.js";
import { GenreSeriesModel } from "../models/genre_series.js";
import { GenreModel } from "../models/genre.js";
// import { UserModel } from "../models/user.js";
export const StreamService={
    getAll:async(page,limit)=>{
        const skip = (page - 1) * limit
        const stream = await StreamModel.find().skip(skip).limit(limit);
        return stream;
    },
    getById:async(id)=>{
        return StreamModel.findById(id)
    },
    add:async(body)=>{
        return StreamModel.create(body)
    },
    update:async(id,data)=>{
        return StreamModel.findByIdAndUpdate(id,data,{ new: true });
    },
    delete:async(id)=>{
        return StreamModel.findByIdAndDelete(id);
    },
    get_Episode_Of_StreamBy_Id:async(id)=>{
        try {
            return await StreamModel.findById(id).populate('episode_id');
          } catch (error) {
            throw new Error(error.message);
          }
    },
    get_User_Of_StreamBy_Id:async(id)=>{
        return StreamModel.findById(id).populate("user_id")
    },
    get_Season_Of_Episode_Of_A_Stream_By_Id:async(id)=>{
        const stream = await StreamModel.findById(id);
         if (!stream) {
         return "No Stream found";
         }
         const episode = await EpisodeModel.findById(stream.episode_id);
         if(!episode){
            return "No Episode of the stream if found"
         }
         const season = await SeasonModel.findById(episode.season_id);  
         console.log(season);
         
         if (!season) {
         return "no season found";
         }
      return season;
    },
    get_Series_Of_Season_Of_Episode_Of_Stream_By_Id:async(id)=>{
        const stream = await StreamModel.findById(id);
         if (!stream) {
         return "No Stream found";
         }
         const episode = await EpisodeModel.findById(stream.episode_id);
         if(!episode){
            return "No Episode of the stream if found"
         }
         const season = await SeasonModel.findById(episode.season_id);  
         if (!season) {
         return "no Season found";
      }
        const series= await SeriesModel.findById(season.series_id)
        if (!series) {
            return "no Series found";
        }
        return series;
    },
    
    get_Genre_Of_Series_Of_Season_Of_Episode_Of_Stream_By_Id:async(id)=>{
        const stream = await StreamModel.findById(id);
        if (!stream) {
        return "No Stream found";
        }
        const episode = await EpisodeModel.findById(stream.episode_id);
        if(!episode){
           return "No Episode of the stream if found"
        }
        const season = await SeasonModel.findById(episode.season_id);  
        if (!season) {
        return "no Season found";
     }
       const series= await SeriesModel.findById(season.series_id)
       if (!series) {
           return "no Series found";
       }
       console.log(series);
       const genre_series= await GenreSeriesModel.findOne({series_id: series._id});
       console.log(genre_series);
       if(!genre_series){
        return "No Genre_Series Found";
       }
       const genre = await GenreModel.findOne({series_id: series._id});
       console.log(genre);
       if(!genre){
        return "No Genre Found";
       }
       return genre
    }
}