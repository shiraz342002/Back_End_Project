import express from "express"
import {GenreValidationSchema} from "../validations/index.js"
import {validate,authenticate} from "../middleware/index.js"
import { GenreController } from "../controllers/index.js"


const router = express.Router()
router.get("/",GenreController.getAll)
router.get("/:id",GenreController.getById)
router.post("/",validate(GenreValidationSchema.create),GenreController.add)
router.delete("/:id",GenreController.deleteFileById);
router.patch("/:id",validate(GenreValidationSchema.update),GenreController.updateFileById)

export default router

//Notes
// Removing authenticate from patch and delete for testing 