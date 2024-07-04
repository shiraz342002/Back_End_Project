import express from "express";

// routes
import userRoute from "./user.js";
import fileRoute from "./file.js"
import seriesRoute from "./series.js"
import genreRoute from "./genre.js"
import genreseriesRoute from "./genre_series.js"
import seasonRoute from "./season.js"
import episodeRoute from "./episodes.js"
import streamRoute from "./stream.js"

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes
// protectedRouter.use("/file",fileRoute)
// protectedRouter.use("/series",seriesRoute)
// protectedRouter.use("/genre",genreRoute)
// protectedRouter.use("/genreseries",genreseriesRoute)
// protectedRouter.use("/season",seasonRoute)
// protectedRouter.use("/episode",episodeRoute)
// protectedRouter.use("/stream",streamRoute)


// Note
//just for testing purposes I'm including the protected routes as unprotected

// Un-Protected Routes
unProtectedRouter.use("/file",fileRoute)
unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/series",seriesRoute)
unProtectedRouter.use("/genre",genreRoute)
unProtectedRouter.use("/genreseries",genreseriesRoute)
unProtectedRouter.use("/season",seasonRoute)
unProtectedRouter.use("/episode",episodeRoute)
unProtectedRouter.use("/stream",streamRoute)




export { protectedRouter, unProtectedRouter };
