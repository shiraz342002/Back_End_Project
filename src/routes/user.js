import express from "express";
import { UserValidationSchema } from "../validations/user_validation.js";
import { validate, authenticate,authorize } from "../middleware/index.js";
import  {UserController}  from "../controllers/index.js";

const router = express.Router();
//Basic Crud APis
router.get("/",UserController.getAll);
router.get("/:id",authenticate,authorize,UserController.getById)
router.post("/register",validate(UserValidationSchema.register),UserController.add);
router.post("/login",validate(UserValidationSchema.login),UserController.login);
router.patch("/:id",authenticate,authorize,validate(UserValidationSchema.update),UserController.update);
router.delete("/:id",authenticate,authorize,UserController.delete);
//Aggregation Routes

router.get("/:id/streams",UserController.getAllStreamById);
//Get Streams of Users By Stream id
router.get("/:id/streams/:streamId",UserController.getOneStreamByUserId)
export default router
