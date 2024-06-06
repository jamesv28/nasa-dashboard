const express = require("express");
const getAllLaunches = require("./launches.controller");

const launcesRouter = express.Router();

launcesRouter.get("/launches", getAllLaunches);

module.exports = launcesRouter;
