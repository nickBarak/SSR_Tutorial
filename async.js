const userLeft = 0;
const userWatchingCatVideo = null;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "The user left..",
//       msg: ":("
//     });
//   } else if (userWatchingCatVideo) {
//     errorCallback({
//       name: "User watch cat vid",
//       msg: "So cat videos > ?"
//     });
//   } else {
//     callback("Aye you cool bruh");
//   }
// }

// watchTutorialCallback(
//   msg => {
//     console.log(`Success: ${msg}`);
//   },
//   error => {
//     console.log(`${error.name} and can i getta ${error.msg}`);
//   }
// );

// function watchTutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: "The user left..",
//         msg: ":("
//       });
//     } else if (userWatchingCatVideo) {
//       reject({
//         name: "User watch cat vid",
//         msg: "So cat videos > ?"
//       });
//     } else {
//       resolve("Aye you cool bruh");
//     }
//   });
// }

// // watchTutorialCallback(
// //   msg => {
// //     console.log(`Success: ${msg}`);
// //   },
// //   error => {
// //     console.log(`${error.name} and can i getta ${error.msg}`);
// //   }
// // );
// watchTutorialPromise()
//   .then(msg => {
//     console.log(`Success: ${msg}`);
//   })
//   .catch(error => {
//     console.log(`${error.name} and can i getta ${error.msg}`);
//   });
function smoething() {
  return new Promise((resolve, reject) => {
    if (userLeft)
      reject({
        name: "The user left..",
        msg: ":("
      });
    else if (userWatchingCatVideo)
      reject({
        name: "User watch cat vid",
        msg: "So cat videos > ?"
      });
    else resolve("Aye you cool bruh");
  });
}

async function watchTutorialPromise() {
  try {
    const response = await smoething();
    console.log(response);
  } catch (err) {
    console.log(`Error: ${err.name} ${err.msg}`);
  }
}

watchTutorialPromise();

// console.log(1);
// watchTutorialPromise();
// console.log(3);

// function makeRequest(location) {
//   return new Promise((resolve, reject) => {
//     console.log(`Making request to ${location}`);
//     if (location === "Google") {
//       resolve("Google says hi");
//     } else {
//       reject("We can only talk to Google");
//     }
//   });
// }

// function processRequest(response) {
//   return new Promise((resolve, reject) => {
//     console.log("Processing response");
//     resolve(`${response} + Extra Information`);
//   });
// }

// // makeRequest("Googl")
// //   .then(response => {
// //     console.log("Process received");
// //     return processRequest(response);
// //   })
// //   .then(processedResponse => {
// //     console.log(processedResponse);
// //   })
// //   .catch(err => {
// //     console.log(err);
// //   });

// async function doWork(location) {
//   try {
//     const response = await makeRequest(location);
//     console.log("Response received");
//     const processedResponse = await processRequest(response);
//     console.log(processedResponse);
//   } catch (err) {
//     console.log(`Error: Some error\n${err}`);
//   }
// }

// doWork("Googe");
