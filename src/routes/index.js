import express from "express";

// routes
import userRoute from "./user.js";
import fileRoute from "./file.js"
import seriesRoute from "./series.js"
import genreRoute from "./genre.js"
import genreseriesRoute from "./genre_series.js"
import 


const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes
// protectedRouter.use("/file",fileRoute)
// protectedRouter.use("/series",seriesRoute)
// protectedRouter.use("/genre",genreRoute)
// protectedRouter.use("/genreseries",genreseriesRoute)


//just for testing purposes I'm including the protected routes as unprotected
// Un-Protected Routes
unProtectedRouter.use("/file",fileRoute)
unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/series",seriesRoute)
unProtectedRouter.use("/genre",genreRoute)
unProtectedRouter.use("/genreseries",genreseriesRoute)




export { protectedRouter, unProtectedRouter };
