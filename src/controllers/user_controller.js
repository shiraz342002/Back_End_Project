import { UserService } from "../services/user_service.js";
import { httpResponse } from "../utils/index.js";
import bcrypt from "bcrypt"; //user ke password ko hash me karne ke liye
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
			const data = await UserService.getById(req.params.id)
			return httpResponse.CREATED(res,data);
		}catch(err){
			return httpResponse.INTERNAL_SERVER_ERROR(res,err)
		}
	},
	add: async (req, res) => {
		try {
			const salt = await bcrypt.genSalt();
			const hashed_pw=await bcrypt.hash(req.body.password,salt);
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
			const auth=await bcrypt.compare(exsist_user.password,req.body.password)
			if(auth){
				const j_token = jwt.sign({ user: exsist_user }, config.env.jwtSecret);
				return httpResponse.SUCCESS(res,j_token)
			}else{
				return httpResponse.NOT_FOUND(res,"Enter Correct User");
			}
		}catch(err){
			return httpResponse.NOT_FOUND(res,"No user found");
		}
	}

};
