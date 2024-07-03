import { UserModel } from "../models/user.js";

export const UserService = {
	getAll: async () => {
		return UserModel.find();
	},
	getById:async(id)=>{
		return UserModel.findById(id);
	},
	add: async (body) => {
		return UserModel.create(body);
	},
	update:async(id,data)=>{
		return UserModel.findByIdAndUpdate(id,data);
	},
	delete:async(id)=>{
		return UserModel.findByIdAndDelete(id);
	},
	login:async(body)=>{
		return UserModel.findOne({email:body.email});
	}
};
