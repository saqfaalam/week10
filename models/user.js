const pool = require("../config/config.js");

class User {
  //
  static findUsers = async (next) => {
    //
    const findQuery = `SELECT * FROM users`;

    try {
      const data = await pool.query(findQuery);
      return data.rows;
    } catch (err) {
      next(err);
    }
  };

  static findById = async (id, next) => {
    //
    const findQuery = `SELECT * FROM users WHERE users.id = $1`;

    try {
      const data = await pool.query(findQuery, [id]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static createUser = async (params, next) => {
    try {
      const { id, email, gender, password, role } = params;
      const insertQuery = `
        INSERT INTO users (id,email, gender, password,role)
          VALUES
            ($1,$2,$3,$4,$5)
            RETURNING *
      `;

      const data = await pool.query(insertQuery, [
        id,
        email,
        gender,
        password,
        role,
      ]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static updateUser = async (id, params, next) => {
    try {
      const { role } = params;
      const updateQuery = `
        UPDATE users
        SET role = $1
        WHERE id = $2
        RETURNING *
      `;
      const data = await pool.query(updateQuery, [role, id]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };

  static deleteUser = async (id, next) => {
    try {
      const deleteQuery = `DELETE FROM users WHERE id = $1 RETURNING *`;
      const data = await pool.query(deleteQuery, [id]);
      return data.rows[0];
    } catch (err) {
      next(err);
    }
  };
}

module.exports = User;
