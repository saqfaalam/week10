const express = require("express");
const router = express.Router();
const movieRouter = require("./movies");
const userRouter = require("./users");

router.use("/movies", movieRouter);
router.use("/users", userRouter);

module.exports = router;
