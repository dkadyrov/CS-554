const redisConnection = require("./redis-connection");
const axios = require("axios"); 
const bluebird = require("bluebird");

const url = "https://gist.githubusercontent.com/philbarresi/5cf15393d245b38a2d86ce8207d5076c/raw/d529fb474c1af347702ca4d7b992256237fa2819/lab5.json";

async function main() {
    redisConnection.on("get-data", async(data, channel) => {
        const data = await axios.get(url).data;


    })

}