const pool = require("../config/config.js");

class Movie {
  static getMovies = async (next) => {
    const findQuery = `
        SELECT *
        FROM movies;
    `;

    try {
      const data = await pool.query(findQuery);

      return data.rows;
    } catch (err) {
      next(err);
    }
  };

  static findById = async (id, next) => {
    const findQuery = `
        SELECT *
        FROM movies
        WHERE id = $1
    `;
    try {
      const data = await pool.query(findQuery[id]);
      if (data.rows.length === 0) {
        next({ name: "Movie not found" });
      } else {
        return data.rows[0];
      }
    } catch (err) {
      next(err);
    }
  };

  static createMovie = async (movie, next) => {
    try {
      const { title, genres, years } = params;
      const insertQuery = `
            INSERT INTO movies (
                title,
                genres,
                year
            )
            VALUES (
                $1,
                $2,
                $3
            )
            RETURNING *
        `;
      const data = await pool.query(insertQuery, [title, genres, year]);

      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };
}

module.exports = Movie;
