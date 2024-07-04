import express from "express";
import { UserValidationSchema } from "../validations/user_validation.js";
import { validate, authenticate } from "../middleware/index.js";
import  {UserController}  from "../controllers/index.js";

const router = express.Router();
//Basic Crud APis
router.get("/",UserController.getAll);
router.get("/:id",UserController.getById)
router.post("/register",validate(UserValidationSchema.register),UserController.add);
router.post("/login",validate(UserValidationSchema.login),UserController.login);
router.patch("/:id",validate(UserValidationSchema.update),UserController.update);
router.delete("/:id",UserController.delete);
//Aggregation Routes
router.get("/:id/streams",UserController.getAllStreamById);            // Working
router.get("/:id/streams/:streamId",UserController.getOneStreamByUserId) // Working Properly(with find not with aggregate)
router.delete("/:id/streams/:streamId",UserController.deleteStreamByUserId);//Working
export default router
