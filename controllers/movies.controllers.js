export const getMovies = (req, res) => {
    res.json({ message: 'Getting list of movies' });
};
export const putMovies = (req, res) => {
    res.json({ message: 'Creating movies list' });
};

export const updMovies = (req, res) => {
    res.json({ message: 'Updating movies list' });
};

export const delMovies = (req, res) => {
    res.json({ message: 'Delete the movie list' });
};
