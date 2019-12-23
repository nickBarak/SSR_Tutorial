const fetch = require("node-fetch");

console.log(
  fetch("https://reqres.in/api/users/3", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name: "User 1"
    })
  })
    .then(res => {
      if (res.ok) {
        console.log("200: Success");
        return res.json();
      } else console.log("404: Not found");
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(`ERROR: ${err}`))
);
