import Movie from '../models/movies.models.js';
export const getMovies = async (req, res) => {
    //res.json({ message: 'Getting list of movies' });
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const getMovieDetail = async (req, res) => {
    //res.json({ message: 'Getting a single movie' });
    try {
        const movie = await Movie.findById(req.params.id);
        if(movie == null) return res.status(404).json({ message: 'Movie not found' });
        else res.json(movie);
    } catch (err) {
        res.status(500).json(err);
    }

}

export const putMovies = async (req, res) => {
    //res.json({ message: 'Creating movies list' });
    console.log(req.body);
 
    //validate data

    const newmovie = new Movie({
        title: req.body.title,
        desc: req.body.desc,
    });

    try {
        const savedMovie = await newmovie.save();
        return res.status(201).json(savedMovie);
    } catch (err) {
        return res.status(400).json(err);
    }

};

export const updMovies = async (req, res) => {
   // res.json({ message: 'Updating movies list' });

    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            desc: req.body.desc,
        }, { new: true });
        return res.json(updatedMovie);
    }
    catch (err) {
        res.status(500).json(err);
    }
};

export const delMovies = async (req, res) => {
    //res.json({ message: 'Delete the movie list' });
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        if (deletedMovie == null) {
            return res.status(404).json({ message: 'Movie not found' });
        } else {
            return res.json({ message: 'Movie deleted successfully' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
