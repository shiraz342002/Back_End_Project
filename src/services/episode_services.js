import {EpisodeModel} from "../models/episode.js"
import { StreamModel } from "../models/stream.js";
export const EpisodeService={
    getAll:async(page,limit)=>{
        const skip = (page - 1) * limit
        const episode = await EpisodeModel.find().skip(skip).limit(limit);
        return episode;
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
    getStreamsOfEpisodeById:async(id)=>{
        return StreamModel.find({episode_id:id})
    }
}