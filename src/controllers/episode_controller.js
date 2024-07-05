import {EpisodeService} from "../services/index.js"
import { httpResponse } from "../utils/httpResponse.js"
export const EpisodeController={
    getAll:async(req,res)=>{
        try{
            const data = await EpisodeService.getAll();
            return httpResponse.SUCCESS(res,data);
        }catch(err){
            return httpResponse.INTERNAL_SERVER_ERROR(res,err);
        }
    },
    getById:async(req,res)=>{
		try{
			const data = await EpisodeService.getById(req.params.id)
			return httpResponse.SUCCESS(res,data);
		}catch(err){
			return httpResponse.INTERNAL_SERVER_ERROR(res,err)
		}
	},
    add : async (req, res) => {
        try{
          // console.log("adding");  
			const data = await EpisodeService.add(req.body)
      console.log("Added");
      
			return httpResponse.CREATED(res,data);
		}catch(err){
			return httpResponse.INTERNAL_SERVER_ERROR(res,err)
		}
    },
    updateFileById: async (req, res) => {
        try {
            const file = await EpisodeService.update(req.params.id, req.body, { new: true, runValidators: true });
            if (!file) {
                return httpResponse.NOT_FOUND(res, 'File not found');
            }
            return httpResponse.SUCCESS(res, file);
        } catch (err) {
            console.error(err);
            return httpResponse.INTERNAL_SERVER_ERROR(res, err.message);
        }
    },
    deleteFileById: async (req, res) => {
        try {
          const file = await EpisodeService.getById(req.params.id);
          if (!file) {
            return httpResponse.NOT_FOUND(res, "File not found");
          }
        // console.log("file found");
          const deletedFile = await EpisodeService.delete(req.params.id)
          if (!deletedFile) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, "Failed to delete file");
          }
          return httpResponse.SUCCESS(res, deletedFile);
        } catch (err) {
          // console.error("Error deleting file:", err);
          return httpResponse.INTERNAL_SERVER_ERROR(res, err);
        }
      },
      getStreamsOfEpisodeById:async(req,res)=>{
        try{
          const data = await EpisodeService.getStreamsOfEpisodeById();
          return httpResponse.SUCCESS(res,data);
        }catch(err){
          return httpResponse.INTERNAL_SERVER_ERROR(res,err);
        }
      }

}