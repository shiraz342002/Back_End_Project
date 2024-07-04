import { UserService } from "../services/user_service.js";
import { httpResponse } from "../utils/index.js";
import bcrypt from "bcrypt";
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

	getById:async(req,res)=>{
		try{
			console.log("Hello");
			
			const data = await UserService.getById(req.params.id)
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
			const data = await UserService.delete(req.params.id)
			return httpResponse.SUCCESS(res,data)
		}catch(err){
			return httpResponse.INTERNAL_SERVER_ERROR(res,err)
		}
	},
	update:async(req,res)=>{
		try{
			const data= await UserService.update(req.params.id,req.body);
			return httpResponse.SUCCESS(res,data);
		}catch(err){
			return httpResponse.INTERNAL_SERVER_ERROR(res,err);
		}
	},
	login:async(req,res)=>{
		try{
			const exsist_user= await UserService.login(req.body);
			if(!exsist_user){
			return httpResponse.NOT_FOUND(res,"User not found")
			}
			const auth=await bcrypt.compare(req.body.password,exsist_user.password)
			// console.log(exsist_user.password);
			// console.log(req.body.password);
			// console.log(config.env.jwtSecret);
			// console.log("Your pass is verified");
			if(auth){
				// console.log("Ok your pass is verified");
				
				const j_token = jwt.sign({ user: exsist_user }, config.env.jwtSecret);
				return httpResponse.SUCCESS(res, {
					message: "Token generated successfully",
					token: j_token
				  });
			}else{
				return httpResponse.NOT_FOUND(res,"Enter Correct User");
			}
		}catch(err){
			return httpResponse.NOT_FOUND(res,"No user found");
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
			// console.log(req.params.streamId);
			// console.log(req.params.id);
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
