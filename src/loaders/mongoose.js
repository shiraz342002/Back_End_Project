import mongoose from "mongoose";
import config from "../config/index.js";

export default async function mongooseLoader() {
	const connection = mongoose.connection;
	connection.once("connected", () => console.log("Database Connected ~"));
	connection.on("error", (error) => console.log("Database Error: ", error));

	//there is a problem that db is not getting created if I use env file tried changing the conn string as well	
	mongoose.connect("mongodb://localhost:27017/IPTV", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	return connection.db;
}
