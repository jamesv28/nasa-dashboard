const {
  getAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchWithId,
} = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing required fields",
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (String(launch.launchDate) === "Invalid Date") {
    return res.status(400).json({
      error: "Invalid Launch Date",
    });
  }
  addNewLaunch(launch);

  return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);

  if (!existsLaunchWithId) {
    return res.status(400).json({
      error: "Launch not found",
    });
  }

  const aborted = abortLaunchWithId(launchId);

  return res.status(200).json(aborted);
}
module.exports = { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch };
