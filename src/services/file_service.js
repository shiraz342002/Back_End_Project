import {FileModel} from "../models/file.js"
export const FileService={
    getAll:async(page,limit)=>{
        const skip = (page - 1) * limit
        let sortOrder;
        if (order === 'asc') {
         sortOrder = 1;
         } else {
            sortOrder = -1;
        }
        const files = await FileModel.find().sort({ [sortBy]: sortOrder }).skip(skip).limit(limit);
        return files;
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