import { UserModel } from "../models/user.js";
import { StreamModel } from "../models/stream.js";

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
	},
	getAllStreamById:async(id)=>{
		return StreamModel.find({user_id:id}).populate("user_id");
	  },
	deleteStreamByUserId: async (user_id,stream_id) => {
		// console.log("Inside service");
		// console.log(user_id);
		// console.log(stream_id);
		return StreamModel.findOneAndDelete({ _id: stream_id, user_id: user_id });
	  },
	  getOneStreamByUserId: async (user_id, stream_id) => {
		//   console.log(user_id);
		//   console.log(stream_id);
		//   console.log("Im running");

	// 	return StreamModel.aggregate([
	// 		{
	// 		$match: {
	// 				_id: new mongoose.Types.ObjectId(stream_id),
	// 				user_id: new mongoose.Types.ObjectId(user_id),
	// 			},
	// 		},
	// ]);
		  const stream = await StreamModel.findOne({
			_id: stream_id,
			user_id: user_id
		});
		return stream;
	},
};
