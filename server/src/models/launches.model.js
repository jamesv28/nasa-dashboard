const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Kepler Mission",
  rocket: "Explorer IS1",
  launchDate: new Date("December 32 2032"),
  destination: "Kepler-442 b",
  customers: ["ztm", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}
module.exports = {
  getAllLaunches,
};
