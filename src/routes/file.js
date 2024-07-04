import express from "express"
import { FileValidationSchema } from "../validations/file_validation.js"
import {validate,authenticate} from "../middleware/index.js"
import { FileController } from "../controllers/index.js"
const router =express.Router()
router.get("/",FileController.getAll)
router.get("/:id",FileController.getById)
router.post("/",validate(FileValidationSchema.upload),FileController.add)
router.delete("/:id",authenticate,FileController.deleteFileById);
router.patch("/:id",authenticate,validate(FileValidationSchema.update),FileController.updateFileById)
export default router;