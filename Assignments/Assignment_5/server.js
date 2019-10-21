const bluebird = require("bluebird");
const express = require("express");
const app = express();
const redis = require("redis");
const client = redis.createClient();

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const makeTestPromise = () => {
  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      fulfill({ status: "Good" });
    }, 4000);
  });
};

app.get("/api/people/history", (req, res) => {
    let makeTestPromiseResult = makeTestPromise();

    makeTestPromiseResult.then(result => {
        res.json(result);
    });
});
app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});