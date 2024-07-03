import express from "express";

// routes
import userRoute from "./user.js";
import fileRoute from "./file.js"

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes
protectedRouter.use("/file",fileRoute)

// Un-Protected Routes
unProtectedRouter.use("/user", userRoute);

export { protectedRouter, unProtectedRouter };
