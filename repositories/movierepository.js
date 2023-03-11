const Movie = require('../models/movie.js');

class MovieRepository {
    static findMovies = async (next) => {
        try {
            const data = await Movie.getMovie(next);
            return data;
        } catch (err) {
            next(err);
        }
    }

    static findById = async (id, next) => {
        try {
            const data = await Movie.FindById(id,next);
            return data;
        } catch (err) {
            next(err);
        }
    }
}

module.exports = MovieRepository;