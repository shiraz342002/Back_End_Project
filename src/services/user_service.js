import { UserModel } from "../models/user.js";
import { StreamModel } from "../models/stream.js";
import mongoose from "mongoose";

export const UserService = {
  getAll: async (page, limit, sortBy, order,filters) => {
    const skip = (page - 1) * limit;
    let sortOrder;
    if (order === "asc") {
      sortOrder = 1;
    } else {
      sortOrder = -1;
    }
    const users = await UserModel.find(filters)
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(limit);
    return users;
  },
  getByToken: async (data) => {
    const userData = {
      first_name: data.user.first_name,
      last_name: data.user.last_name,
      email: data.user.email,
    };
    return userData;
  },
  add: async (body) => {
    return UserModel.create(body);
  },
  update: async (old_data, new_data) => {
    const userid = old_data.user._id;
    return UserModel.findByIdAndUpdate(userid, new_data, { new: true });
  },
  delete: async (data) => {
    return UserModel.findByIdAndDelete(data.user._id);
  },
  login: async (body) => {
    return UserModel.findOne({ email: body.email });
  },
  getAllStreamById: async (id) => {
    return StreamModel.find({ user_id: id }).populate("user_id");
  },
  deleteStreamByUserId: async (user_id, stream_id) => {
    return StreamModel.findOneAndDelete({ _id: stream_id, user_id: user_id });
  },
  getOneStreamByUserId: async (user_id, stream_id) => {
    return StreamModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(stream_id),
          user_id: new mongoose.Types.ObjectId(user_id),
        },
      },
    ]);
  },
};
