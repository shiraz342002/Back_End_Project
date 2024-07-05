import {StreamService} from "../services/index.js"
import { httpResponse } from "../utils/httpResponse.js"
export const StreamController={
    getAll:async(req,res)=>{
        try{
            const data = await StreamService.getAll();
            return httpResponse.SUCCESS(res,data);
        }catch(err){
            return httpResponse.INTERNAL_SERVER_ERROR(res,err);
        }
    },
    getById:async(req,res)=>{
		try{
			const data = await StreamService.getById(req.params.id)
			return httpResponse.SUCCESS(res,data);
		}catch(err){
			return httpResponse.INTERNAL_SERVER_ERROR(res,err)
		}
	},
    add : async (req, res) => {
        try{
          console.log("adding");  
			const data = await StreamService.add(req.body)
			return httpResponse.CREATED(res,data);
		}catch(err){
			return httpResponse.INTERNAL_SERVER_ERROR(res,err)
		}
    },
    updateFileById: async (req, res) => {
        try {
            const file = await StreamService.update(req.params.id, req.body, { new: true, runValidators: true });
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
          const file = await StreamService.getById(req.params.id);
          if (!file) {
            return httpResponse.NOT_FOUND(res, "File not found");
          }
        // console.log("file found");
          const deletedFile = await StreamService.delete(req.params.id)
          if (!deletedFile) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, "Failed to delete file");
          }
          return httpResponse.SUCCESS(res, deletedFile);
        } catch (err) {
          console.error("Error deleting file:", err);
          return httpResponse.INTERNAL_SERVER_ERROR(res, err);
        }
      },
     getEpisodeOfStreamById:async (req, res) => {
        try {
          const data = await StreamService.getEpisodeOfStreamById(req.params.id);
          if (!data) {
            return httpResponse.NOT_FOUND(res, 'Stream not found');
          }
          return httpResponse.SUCCESS(res, data.episode_id);
        } catch (err) {
          return httpResponse.INTERNAL_SERVER_ERROR(res, err);
        }
      },
      getUserOfStreamById:async(req,res)=>{
        try{
          const data = await StreamService.getUserOfStreamById(req.params.id);
          return httpResponse.SUCCESS(res,data);
        }catch(err){
          return httpResponse.INTERNAL_SERVER_ERROR(res,err);
        }
      },
      getSeasonOfEpisodeOfStreamByID:async(req,res)=>{
        try{
          const data = await StreamService.getSeasonOfEpisodeOfStreamByID(req.params.id);
          return httpResponse.SUCCESS(res,data);
        }catch(err){
          return httpResponse.INTERNAL_SERVER_ERROR(res,err);
        }

      }

}