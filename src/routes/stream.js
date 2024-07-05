import express from "express"
import {StreamValidationSchema} from "../validations/index.js"
import {validate,authenticate} from "../middleware/index.js"
import { EpisodeController, StreamController} from "../controllers/index.js"


const router = express.Router()
router.get("/",StreamController.getAll)
router.get("/:id",StreamController.getById)
router.post("/",validate(StreamValidationSchema.create),StreamController.add)
router.delete("/:id",StreamController.deleteFileById);
router.patch("/:id",validate(StreamValidationSchema.update),StreamController.updateFileById)
router.get("/:id/episode",StreamController.getEpisodeOfStreamById)

export default router

//Notes
// Removing authenticate from patch and delete for testing 