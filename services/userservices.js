const UserRepository = require("../repositories/userrepository.js");

class UserService {
  //
  static findUsers = async (next) => {
    //
    try {
      const data = await UserRepository.findUsers(next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static findById = async (id, next) => {
    //
    try {
      const data = await UserRepository.findById(id, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static createUser = async (params, next) => {
    try {
      return UserRepository.createUser(params, next);
    } catch (err) {
      next(err);
    }
  };

  static updateUser = async (id, params, next) => {
    try {
      const data = await UserRepository.updateUser(id, params, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static deleteUser = async (id, next) => {
    try {
      const data = await UserRepository.deleteUser(id, next);
      return data;
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UserService;
