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

//Get Episodes of Stream by Stream id
router.get("/:id/episode",StreamController.get_Episode_Of_StreamBy_Id)
//Get users of Streams By stream id
router.get("/:id/user",StreamController.get_User_Of_StreamBy_Id)
//Get Seasons of Episode of a Stream by Stream id
router.get("/:id/episode/season",StreamController.get_Season_Of_Episode_Of_A_Stream_By_Id)
//Get Series of Seaons of Epidoes by Stream Id
router.get("/:id/episode/season/series",StreamController.get_Series_Of_Season_Of_Episode_Of_Stream_By_Id)
//Get GEnre of Series of Season of Episode by Stream Id
router.get("/:id/episode/season/series/genre",StreamController.get_Genre_Of_Series_Of_Season_Of_Episode_Of_Stream_By_Id)
export default router
//Notes
// Removing authenticate from patch and delete for testing 