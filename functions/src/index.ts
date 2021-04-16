import * as functions from "firebase-functions";

export const waitTimes = functions.https.onRequest((request, response) => {
  response.send({"number": 450});
});
