import express from "express"
import {EpisodeValidationSchema} from "../validations/index.js"
import {validate,authenticate} from "../middleware/index.js"
import { EpisodeController } from "../controllers/index.js"


const router = express.Router()
router.get("/",EpisodeController.getAll)
router.get("/:id",EpisodeController.getById)
router.post("/",validate(EpisodeValidationSchema.create),EpisodeController.add)
router.delete("/:id",EpisodeController.deleteFileById);
router.patch("/:id",validate(EpisodeValidationSchema.update),EpisodeController.updateFileById)
router.get("/:id/streams",EpisodeController.getStreamsOfEpisodeById)

export default router

//Notes
// Removing authenticate from patch and delete for testing 