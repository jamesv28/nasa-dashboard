const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 8000;
const { loadPlanetsData } = require("./models/planets.model");
// npm run watch

const MONGO_URL =
  "mongodb+srv://new_nasa_api:555aeiou555@cluster0.4kcyc2g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("Mongo DB connected");
});

mongoose.connection.on("error", (err) => {
  console.error(`Error: ${err}`);
});
async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Port listening on: ${PORT}`);
  });
}

startServer();
