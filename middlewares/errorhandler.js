const errorHandler = (err, req, res, next) => {

    if(err.name === 'ErrorNotFound') {
        request.status(404).json({
            message: 'Error Not Found'
        });
    } else {
        request.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

module.exports = errorHandler;