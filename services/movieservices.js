const MovieRepository = require("../repositories/movierepository.js");

class MovieServices {
  static findMovie = async (next) => {
    try {
      const data = await MovieRepository.findMovie(next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static findById = async (id, next) => {
    return await MovieRepository.findById(id);
  };

  static createMovie = async (params, next) => {
    try {
      return MovieRepository.createMovie(params, next);
    } catch (err) {
      next(err);
    }
  };

  static updateMovie = async (id, params, next) => {
    try {
      const data = await MovieRepository.updateMovie(id, params, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static deleteMovie = async (id, next) => {
    try {
      const data = await MovieRepository.deleteMovie(id, next);
      return data;
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MovieServices;
