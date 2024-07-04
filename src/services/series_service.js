import {SeriesModel} from "../models/series.js"
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
}