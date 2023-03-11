const express = require("express");
const app = express();
const port = 3000;
const errorHandler = require("./middlewares/errorhandler.js");
const router = require("./routes/index.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//router
app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
