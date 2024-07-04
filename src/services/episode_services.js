import {EpisodeModel} from "../models/episode.js"
export const EpisodeService={
    getAll:async()=>{
        return EpisodeModel.find();
    },
    getById:async(id)=>{
        return EpisodeModel.findById(id)
    },
    add:async(body)=>{
        return EpisodeModel.create(body)
    },
    update:async(id,data)=>{
        return EpisodeModel.findByIdAndUpdate(id,data,{ new: true });
    },
    delete:async(id)=>{
        return EpisodeModel.findByIdAndDelete(id);
    },
}