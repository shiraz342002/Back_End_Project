import {SeriesService} from "../services/index.js"
import { httpResponse } from "../utils/httpResponse.js"
export const SeriesController={
    getAll:async(req,res)=>{
        try{
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10
            const data = await SeriesService.getAll(page,limit);
            return httpResponse.SUCCESS(res,data);
        }catch(err){
            return httpResponse.INTERNAL_SERVER_ERROR(res,err);
        }
    },
    getById:async(req,res)=>{
		try{
			const data = await SeriesService.getById(req.params.id)
			return httpResponse.SUCCESS(res,data);
		}catch(err){
			return httpResponse.INTERNAL_SERVER_ERROR(res,err)
		}
	},
    add : async (req, res) => {
        try{
			const data = await SeriesService.add(req.body)
			return httpResponse.CREATED(res,data);
		}catch(err){
			return httpResponse.INTERNAL_SERVER_ERROR(res,err)
		}
    },
    updateFileById: async (req, res) => {
        try {
            const file = await SeriesService.update(req.params.id, req.body, { new: true, runValidators: true });
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
          const file = await SeriesService.getById(req.params.id);
          if (!file) {
            return httpResponse.NOT_FOUND(res, "File not found");
          }
        // console.log("file found");
          const deletedFile = await SeriesService.delete(req.params.id)
          if (!deletedFile) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, "Failed to delete file");
          }
          return httpResponse.SUCCESS(res, deletedFile);
        } catch (err) {
          console.error("Error deleting file:", err);
          return httpResponse.INTERNAL_SERVER_ERROR(res, err.message || "Internal server error");
        }
      },
      getAllSeasonsOfSeriesBySeriesId:async(req,res)=>{
        try{
          // console.log(req.params.id);
          const data = await SeriesService.getAllSeasonsOfSeriesBySeriesId(req.params.id);
          return httpResponse.SUCCESS(res,data);
        }catch(err){
          return httpResponse.INTERNAL_SERVER_ERROR(res,err);
        }
      },
      getAllEpisodesOfSeriesById:async(req,res)=>{
        try{
          const data = await SeriesService.getAllEpisodesOfSeriesById(req.params.id);
          return httpResponse.SUCCESS(res,data);
        }catch(err){
          return httpResponse.INTERNAL_SERVER_ERROR(res,err);
      }
    }

}