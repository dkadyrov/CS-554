const express = require("express");
const bodyParser = require("body-parser");
const redisConnection = require("../redis-connection");
const worker = require("../worker");

const app = express();
app.use(bodyParser.json());

app.get("/api/people/:id", async (req, res) => {
    try {
        let user = await clientInformation.getAsync(req.params.id);
        let person = JSON.parse(user);

        res.json(person);
    } catch (error) {
        res.send({
            status: error.message
        });
        return
    }
})

app.post("/api/people", async (req, res) => {
    try {
        let response = await worker.sendMessage({
            redis: redisConnection,
            eventName: "add-person",
            data: {
                message: req.body.message
            },
            expectResponse: false,
        });
        res.json({
            sent: "person added"
        });
    } catch (error) {
        res.send({
            status: error.message
        });
        return
    }
});

app.delete("/api/people/:id", async (req, res) => {

});

app.put("/api/people/:id", async( req, res) => {


});

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});