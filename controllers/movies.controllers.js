import Movie from '../models/movies.models.js';
export const getMovies = (req, res) => {
    res.json({ message: 'Getting list of movies' });
};
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

export const updMovies = (req, res) => {
    res.json({ message: 'Updating movies list' });
};

export const delMovies = (req, res) => {
    res.json({ message: 'Delete the movie list' });
};
