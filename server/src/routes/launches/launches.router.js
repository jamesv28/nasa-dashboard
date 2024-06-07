const express = require("express");
const htttpGetAllLaunches = require("./launches.controller");

const launcesRouter = express.Router();

launcesRouter.get("/launches", htttpGetAllLaunches);

module.exports = launcesRouter;
