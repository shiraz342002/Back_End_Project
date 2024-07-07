import { httpResponse } from "../utils/index.js";

export const authorize = (req, res, next) => {
  if(req.user.user.email!=="admin@example.com"){
    return httpResponse.UNAUTHORIZED(res, "You are not authorized to perform this action.");
  }
  next();
};
