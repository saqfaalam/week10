const MovieService = require('../services/movieservices.js');

class MovieController {

    static findMovie = async (req, res, next) => {
        try {
            const data = await MovieService.findMovie(next);
            res.status(200).json(data);
        } catch (err) {
            next(err);
        }
        
    }

    static findById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const data = await MovieService.findById(id, next);
            if(data) {
                res.status(200).json(data);
            } else {
                next ({name : 'ErrorNotFound'});
            }
        } catch (err) {
            next(err);
        
        }
    }

    static createMovie = async (req, res, next) => {
        try {
            
            const data = await MovieService.createMovie(params, next);
            res.status(201).json(data);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = MovieController;