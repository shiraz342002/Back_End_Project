import {StreamModel} from "../models/stream.js"
import { EpisodeModel } from "../models/episode.js";
// import { UserModel } from "../models/user.js";
export const StreamService={
    getAll:async()=>{
        return StreamModel.find();
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
    getEpisodeOfStreamById:async(id)=>{
        try {
            return await StreamModel.findById(id).populate('episode_id');
          } catch (error) {
            throw new Error(error.message);
          }
    },
    getUserOfStreamById:async(id)=>{
        return StreamModel.findById(id).populate("user_id")
    },
    getSeasonOfEpisodeOfStreamByID:async(id)=>{

    }
}