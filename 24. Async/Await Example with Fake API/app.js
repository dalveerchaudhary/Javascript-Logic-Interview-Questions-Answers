//  Simulate async API call using async/await

function fakeAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}

async function getData() {
  const response = await fakeAPI();
  console.log(response);
}
getData(); // Logs: "Data received!" after 1 second
