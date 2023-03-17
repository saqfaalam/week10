const User = require("../models/user.js");

class UserRepository {
  //
  static findUsers = async (next) => {
    //
    try {
      const data = await User.findUsers(next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static findById = async (id, next) => {
    //
    try {
      const data = await User.findById(id, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static createUser = async (params, next) => {
    try {
      return User.createUser(params, next);
    } catch (err) {
      next(err);
    }
  };

  static updateUser = async (id, params, next) => {
    try {
      const data = await User.updateUser(id, params, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static deleteUser = async (id, next) => {
    try {
      const data = await User.deleteUser(id, next);
      return data;
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UserRepository;