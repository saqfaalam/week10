const MovieRepository = require('../repositories/movierepository.js');

class MovieService {
    
    static findMovies = async (next) => {
      
      try {
        const data = await MovieRepository.findMovies(next);
        return data;
      } catch (err) {
        next(err);
      }
    };
  
    static findById = async (id, next) => {
      
      try {
        const data = await MovieRepository.findById(id, next);
        return data;
      } catch (err) {
        next(err);
      }
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
  
  module.exports = MovieService;