import {SeriesModel} from "../models/series.js"
import { SeasonModel } from "../models/season.js";
import { EpisodeModel } from "../models/episode.js";
import { httpResponse } from "../utils/httpResponse.js";
export const SeriesService={
    getAll:async()=>{
        return SeriesModel.find();
    },
    getById:async(id)=>{
        return SeriesModel.findById(id)
    },
    add:async(body)=>{
        return SeriesModel.create(body)
    },
    update:async(id,data)=>{
        return SeriesModel.findByIdAndUpdate(id,data,{ new: true });
    },
    delete:async(id)=>{
        return SeriesModel.findByIdAndDelete(id);
    },
    getAllSeasonsOfSeriesBySeriesId:async(id)=>{
        // console.log(id);
        return SeasonModel.find({series_id:id});
    },
    getAllEpisodesOfSeriesById:async(id)=>{
        const season = await SeasonModel.findOne({ series_id: id });
        if(!season){
            return httpResponse.NOT_FOUND("No seasons found");
        }
        return EpisodeModel.find({season_id:id})        
        }
    }
