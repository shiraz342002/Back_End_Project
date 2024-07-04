import {StreamModel} from "../models/stream.js"
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
}