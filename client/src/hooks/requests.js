const api_url = "http://localhost:8000";

async function httpGetPlanets() {
  const res = await fetch(`${api_url}/planets`);
  return await res.json();
}

async function httpGetLaunches() {
  const res = await fetch(`${api_url}/launches`);
  const fetchedLaunches = await res.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${api_url}/launches`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
  } catch (err) {
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  try {
    console.log("in the try block");
    await fetch(`${api_url}/launches/${id}`, {
      method: "delete",
    });
  } catch (err) {
    console.log(`Error occurred: ${err}`);
    return {
      ok: false,
    };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
