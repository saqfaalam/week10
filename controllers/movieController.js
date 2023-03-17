const MovieServices = require("../services/movieservices.js");

class MovieController {
  static findMovie = async (req, res, next) => {
    try {
      const data = await MovieServices.findMovie(next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static findById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { err, data } = await MovieServices.findById(id);
      if (err) {
        throw err;
      } else {
        res.status(200).json(data);
      }
    } catch (err) {
      next(err);
    }
  };

  static createMovie = async (req, res, next) => {
    try {
      const data = await MovieServices.createMovie(req.body, next);

      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  };

  static updateMovie = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await MovieService.updateMovie(id, req.body, next);
      if (data) {
        res.status(200).json(data);
      } else {
        next({ name: "ErrorNotFound" });
      }
    } catch (err) {
      next(err);
    }
  };

  static deleteMovie = async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await MovieServices.deleteMovie(id, next);

      if (data) {
        res.status(200).json({
          message: "Deleted successfully",
          data,
        });
      } else {
        next({ name: "ErrorNotFound" });
      }
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MovieController;
