import {FileModel} from "../models/file.js"
export const FileService={
    getAll:async()=>{
        return FileModel.find();
    },
    getById:async(id)=>{
        return FileModel.findById(id)
    },
    add:async(body)=>{
        return FileModel.create(body)
    },
    update:async(id,data)=>{
        return FileModel.findByIdAndUpdate(id,data);
    },
    delete:async(id)=>{
        return FileModel.findByIdAndDelete(id);
    }
};