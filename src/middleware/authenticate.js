import jwt from "jsonwebtoken";
import { httpResponse } from "../utils/index.js";
import config from "../config/index.js";

export const authenticate = (req, res, next) => {
	const token = req.header("authorization");
	if (!token)
		return httpResponse.BAD_REQUEST(
			res,
			"Need token (JWT) to hit this API",
			"Access denied. No token provided."
		);
	const bearerToken = token.split(" ")[1];
	try {
		const decoded = jwt.verify(bearerToken, config.env.jwtSecret);
		req.user=decoded;
		next();
	} catch (error) {
		httpResponse.UNAUTHORIZED(res, "Token is not valid", "Invalid token.");
	}
};
