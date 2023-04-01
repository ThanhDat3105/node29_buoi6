const express = require("express");
const foodRouter = require("./foodRoute");
const rootRouter = express.Router();

rootRouter.use("/food", foodRouter);

module.exports = rootRouter;
