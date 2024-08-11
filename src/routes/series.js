import express from "express"
import {SeriesValidationSchema} from "../validations/index.js"
import {validate,authenticate} from "../middleware/index.js"
import { SeriesController } from "../controllers/index.js"


const router = express.Router()
router.get("/",SeriesController.getAll)
router.get("/:id",SeriesController.getById)
router.post("/",validate(SeriesValidationSchema.create),SeriesController.add)
router.delete("/:id",SeriesController.deleteFileById);
router.patch("/:id",validate(SeriesValidationSchema.update),SeriesController.updateFileById)
//Get all the Seasons of Series By Series Id
router.get("/:id/seasons",SeriesController.getAllSeasonsOfSeriesBySeriesId)
//Get All the Episodes of Series By Series Id
router.get("/:id/seasons/episodes",SeriesController.getAllEpisodesOfSeriesById)
export default router

//Notes
// Removing authenticate from patch and delete for testing 