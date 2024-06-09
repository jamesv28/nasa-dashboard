const launches = new Map();

letLatestFlightNumber = 100;

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

function addNewLaunch(launch) {
  letLatestFlightNumber++;
  launches.set(
    letLatestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      flightNumber: letLatestFlightNumber,
      customers: ["Zero to Mastery", "NASA"],
    })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
