import express from "express";
import {
    getMovies,
    putMovies,
    updMovies,
    delMovies
} from "../controllers/movies.controllers.js";

const router = express.Router();

// For Reading Data
router.get('/movies', getMovies);

// For Creating Data
router.post('/movies', putMovies);

// For Updating Data
router.put('/movies/:id', updMovies);

// For Deleting Data
router.delete('/movies/:id', delMovies);


export default router;