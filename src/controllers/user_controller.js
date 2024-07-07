import { UserService } from "../services/user_service.js";
import { httpResponse } from "../utils/index.js";
import bcrypt from "bcryptjs";
import config from "../config/index.js"
import  jwt  from "jsonwebtoken";

export const UserController = {
	getAll: async (req, res) => {
		try {
			const data = await UserService.getAll();
			return httpResponse.SUCCESS(res, data);
		} catch (err) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, err);
		}
	},

	getByToken:async(req,res)=>{
		try{
			const data = await UserService.getByToken(req.user)
			return httpResponse.SUCCESS(res,data);
		}catch(err){
			return httpResponse.INTERNAL_SERVER_ERROR(res,err)
		}
	},
	add: async (req, res) => {
		try {
			const salt = await bcrypt.genSalt();
			const hashed_pw=await bcrypt.hash(req.body.password,10);
			req.body.password=hashed_pw;
			const data = await UserService.add(req.body);
			return httpResponse.CREATED(res, data);
		} catch (err) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, err);
		}
	},
	delete:async(req,res)=>{
		try{
			const data = await UserService.delete(req.user)
			return httpResponse.SUCCESS(res,data)
		}catch(err){
			return httpResponse.INTERNAL_SERVER_ERROR(res,err)
		}
	},
	update:async(req,res)=>{
		try{
			const data= await UserService.update(req.user,req.body);
			return httpResponse.SUCCESS(res,data);
		}catch(err){
			return httpResponse.INTERNAL_SERVER_ERROR(res,err);
		}
	},
	login:async (req, res) => {
		try {
		  const exist_user = await UserService.login(req.body);
		  if (!exist_user) {
			return httpResponse.NOT_FOUND(res, "User not found");
		  }
	  
		  const auth = await bcrypt.compare(req.body.password, exist_user.password);
		  if (auth) {
			const j_token = jwt.sign({ user: exist_user }, config.env.jwtSecret);
			return httpResponse.SUCCESS(res, {
			  message: "Token generated successfully",
			  token: j_token
			});
		  } else {
			return httpResponse.NOT_FOUND(res, "Incorrect Password");
		  }
		} catch (err) {
		  return httpResponse.NOT_FOUND(res, "No user found");
		}
	  },
	getAllStreamById:async(req,res)=>{
		try{
			const data = await UserService.getAllStreamById(req.params.id)
			// res.json(data)
			return httpResponse.SUCCESS(res,data);
		}catch(err){
			return httpResponse.INTERNAL_SERVER_ERROR(res,err);
		}
	},
	getOneStreamByUserId: async (req, res) => {
		try {
			const data = await UserService.getOneStreamByUserId(req.params.id, req.params.streamId);
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	
	  deleteStreamByUserId: async (req, res) => {
		try {
			const data = await UserService.deleteStreamByUserId(req.params.id, req.params.streamId);
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
};
