import express from "express";
import {
    getMovies,
    putMovies,
    updMovies,
    delMovies,
    getMovieDetail
} from "../controllers/movies.controllers.js";

const router = express.Router();

// For Reading Data
router.get('/', getMovies);
router.get('/:id', getMovieDetail);

// For Creating Data
router.post('/', putMovies);

// For Updating Data
router.put('/:id', updMovies);

// For Deleting Data
router.delete('/:id', delMovies);


export default router;