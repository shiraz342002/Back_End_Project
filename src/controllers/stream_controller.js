import {StreamService} from "../services/index.js"
import { httpResponse } from "../utils/httpResponse.js"
export const StreamController={
    getAll:async(req,res)=>{
      try{
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const sortBy = req.query.sortBy || 'createdAt';
        const order = req.query.order || 'asc';
        const data = await StreamService.getAll(page,limit,sortBy,order);
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
          const { episode_id, time } = req.body;
          const user_id = req.user.user._id;
      const data = await StreamService.add({ episode_id, user_id, time });
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
            return httpResponse.INTERNAL_SERVER_ERROR(res, err.message);
        }
    },
    deleteFileById: async (req, res) => {
        try {
          const file = await StreamService.getById(req.params.id);
          if (!file) {
            return httpResponse.NOT_FOUND(res, "File not found");
          }
          const deletedFile = await StreamService.delete(req.params.id)
          if (!deletedFile) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, "Failed to delete file");
          }
          return httpResponse.SUCCESS(res, deletedFile);
        } catch (err) {
          return httpResponse.INTERNAL_SERVER_ERROR(res, err);
        }
      },
      get_Episode_Of_StreamBy_Id:async (req, res) => {
        try {
          const data = await StreamService.get_Episode_Of_StreamBy_Id(req.params.id);
          if (!data) {
            return httpResponse.NOT_FOUND(res, 'Stream not found');
          }
          return httpResponse.SUCCESS(res, data.episode_id);
        } catch (err) {
          return httpResponse.INTERNAL_SERVER_ERROR(res, err);
        }
      },
      get_User_Of_StreamBy_Id:async(req,res)=>{
        try{
          const data = await StreamService.get_User_Of_StreamBy_Id(req.params.id);
          return httpResponse.SUCCESS(res,data);
        }catch(err){
          return httpResponse.INTERNAL_SERVER_ERROR(res,err);
        }
      },
      get_Season_Of_Episode_Of_A_Stream_By_Id:async(req,res)=>{
        try{
          const data = await StreamService.get_Season_Of_Episode_Of_A_Stream_By_Id(req.params.id);
          return httpResponse.SUCCESS(res,data);
        }catch(err){
          return httpResponse.INTERNAL_SERVER_ERROR(res,err);
        }
      },
      get_Series_Of_Season_Of_Episode_Of_Stream_By_Id:async(req,res)=>{
        try{
          const data = await StreamService.get_Series_Of_Season_Of_Episode_Of_Stream_By_Id(req.params.id);
          return httpResponse.SUCCESS(res,data);
        }catch(err){
          return httpResponse.INTERNAL_SERVER_ERROR(res,data);
        }
      },
      get_Genre_Of_Series_Of_Season_Of_Episode_Of_Stream_By_Id:async(req,res)=>{
        try{
          const data = await StreamService.get_Genre_Of_Series_Of_Season_Of_Episode_Of_Stream_By_Id(req.params.id);
          return httpResponse.SUCCESS(res,data);
        }catch(err){
          return httpResponse.INTERNAL_SERVER_ERROR(res,err);
        }
      }

}