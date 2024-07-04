import express from "express"
import {GenreSeriesValidationSchema} from "../validations/index.js"
import {validate,authenticate} from "../middleware/index.js"
import { GenreSeriesController } from "../controllers/index.js"


const router = express.Router()
router.get("/",GenreSeriesController.getAll)
router.get("/:id",GenreSeriesController.getById)
router.post("/",validate(GenreSeriesValidationSchema.create),GenreSeriesController.add)
router.delete("/:id",GenreSeriesController.deleteFileById);
router.patch("/:id",validate(GenreSeriesValidationSchema.update),GenreSeriesController.updateFileById)

export default router

//Notes
// Removing authenticate from patch and delete for testing 