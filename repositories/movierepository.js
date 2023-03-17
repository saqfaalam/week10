const Movie = require("../models/movie.js");

class MovieRepository {
  static findMovie = async (next) => {
    try {
      const data = await Movie.getMovie(next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static findById = async (id) => {
    return await Movie.findById(id);
  };

  static createMovie = async (params, next) => {
    try {
      return Movie.createMovie(params, next);
    } catch (err) {
      next(err);
    }
  };

  static updateMovie = async (id, params, next) => {
    try {
      const data = await Movie.updateMovie(id, params, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static putMovie = async (id, next) => {
    try {
      return Movie.putMovie(id, next);
    } catch (err) {
      next(err);
    }
  };

  static deleteMovie = async (id, next) => {
    try {
        return Movie.deleteMovie(id, next)
    } catch(err) {
        next(err);
    }
  }
}

module.exports = MovieRepository;
