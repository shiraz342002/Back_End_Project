import {FileService} from "../services/file_service.js"
import {authenticate} from "../middleware/authenticate.js";
import { httpResponse } from "../utils/httpResponse.js";
export const FileController = {
    getAll: async (req, res) => {
		try {
			const data = await FileService.getAll();
			return httpResponse.SUCCESS(res, data);
		} catch (err) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, err);
		}
	},
    getById:async(req,res)=>{
		try{
			const data = await FileService.getById(req.params.id)
			return httpResponse.SUCCESS(res,data);
		}catch(err){
			return httpResponse.INTERNAL_SERVER_ERROR(res,err)
		}
	},
    add : async (req, res) => {
        try{
			const data = await FileService.add(req.body)
			return httpResponse.CREATED(res,data);
		}catch(err){
			return httpResponse.INTERNAL_SERVER_ERROR(res,err)
		}
    },
    updateFileById :[authenticate , async (req, res) => {
        try {
            const file = await FileService.findByIdAndUpdate(req.params.id, req.body);
            return httpResponse.SUCCESS(res,file);
        } catch (err) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,err)
        }
    }],
    deleteFileById: async (req, res) => {
        try {
          const file = await FileService.getById(req.params.id);
          if (!file) {
            return httpResponse.NOT_FOUND(res, "File not found");
          }
          console.log("file found");
          const deletedFile = await FileService.delete(req.params.id)
          if (!deletedFile) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, "Failed to delete file");
          }
    
          // Return success response with the deleted file data
          return httpResponse.SUCCESS(res, deletedFile);
        } catch (err) {
          console.error("Error deleting file:", err);
          return httpResponse.INTERNAL_SERVER_ERROR(res, err.message || "Internal server error");
        }
      }
    };
