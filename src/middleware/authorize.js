import { httpResponse } from "../utils/index.js";

export const authorize = (req, res, next) => {
  const userId = req.params.id;
  const tokenUserId = req.user.user._id;
  if (userId !== tokenUserId) {
    return httpResponse.UNAUTHORIZED(res, "You are not authorized to perform this action.");
  }

  next();
};
