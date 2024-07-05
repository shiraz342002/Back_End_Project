import { EpisodeModel } from "../models/episode.js";
import {SeasonModel} from "../models/season.js"
export const SeasonService={
    getAll:async()=>{
        return SeasonModel.find();
    },
    getById:async(id)=>{
        return SeasonModel.findById(id)
    },
    add:async(body)=>{
        return SeasonModel.create(body)
    },
    update:async(id,data)=>{
        return SeasonModel.findByIdAndUpdate(id,data,{ new: true });
    },
    delete:async(id)=>{
        return SeasonModel.findByIdAndDelete(id);
    },
    getEpisodeOfSeasonById:async(id)=>{
        return EpisodeModel.find({season_id:id})
    }
}