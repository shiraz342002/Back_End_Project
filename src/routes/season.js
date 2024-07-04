import express from "express"
import {SeasonValidationSchema} from "../validations/index.js"
import {validate,authenticate} from "../middleware/index.js"
import { SeasonController } from "../controllers/index.js"


const router = express.Router()
router.get("/",SeasonController.getAll)
router.get("/:id",SeasonController.getById)
router.post("/",validate(SeasonValidationSchema.create),SeasonController.add)
router.delete("/:id",SeasonController.deleteFileById);
router.patch("/:id",validate(SeasonValidationSchema.update),SeasonController.updateFileById)

export default router

//Notes
// Removing authenticate from patch and delete for testing 