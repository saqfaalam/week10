const UserServices = require("../services/userservices.js");

class UserController {
  //
  static findUsers = async (req, res, next) => {
    //
    try {
      const data = await UserServices.findUsers(next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static findById = async (req, res, next) => {
    //
    try {
      const { id } = req.params;
      const data = await UserServices.findById(id, next);
      if (data) {
        res.status(200).json(data);
      } else {
        next({ name: "ErrorNotFound" });
      }
    } catch (err) {
      next(err);
    }
  };

  static createUser = async (req, res, next) => {
    try {
      const data = await UserServices.createUser(req.body, next);

      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  };

  static updateUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await UserService.updateUser(id, req.body, next);
      if (data) {
        res.status(200).json(data);
      } else {
        next({ name: "ErrorNotFound" });
      }
    } catch (err) {
      next(err);
    }
  };

  static deleteUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await UserService.deleteUser(id, next);
      if (data) {
        res.status(200).json(data);
      } else {
        next({ name: "ErrorNotFound" });
      }
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UserController;