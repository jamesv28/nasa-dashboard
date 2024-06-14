const request = require("supertest");
const app = require("../../app");

describe("Test /get launches", () => {
  it("should respond with a status of 200", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test /post launches", () => {
  const completeLaunchData = {
    mission: "USS Enterprise",
    rocket: "Uss 11",
    target: "Kepler 442-b",
    launchDate: "January 4, 2028",
  };
  const completeLaunchWithoutDate = {
    mission: "USS Enterprise",
    rocket: "Uss 11",
    target: "Kepler 442-b",
  };

  const launchDataWithInvalidDate = {
    mission: "USS Enterprise",
    rocket: "Uss 11",
    target: "Kepler 442-b",
    launchDate: "hello",
  };

  it("it should respond with a 201 created", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("Content-Type", /json/)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(responseDate).toBe(requestDate);

    expect(response.body).toMatchObject(completeLaunchWithoutDate);
  });

  it("It should catch missing required properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchWithoutDate)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Missing required fields",
    });
  });

  it("It should require a valid date", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithInvalidDate)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Invalid Launch Date",
    });
  });
});
