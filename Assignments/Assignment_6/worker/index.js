const redisConnection = require("./redis-connection");
const axios = require("axios");
const bluebird = require("bluebird");

const url = "https://gist.githubusercontent.com/philbarresi/5cf15393d245b38a2d86ce8207d5076c/raw/d529fb474c1af347702ca4d7b992256237fa2819/lab5.json";

async function main() {
    const persons = await axios.get(url).data;

    redisConnection.on("get-user:request:*", async (data, channel) => {
        let requestId = message.requestId;
        let eventName = message.eventName;

        let messageText = message.data.message;
        let successEvent = `${eventName}:success:${requestId}`;
        let failedEvent = `${eventName}:failed:${requestId}`;

        const id = parseInt(messageText)

        if (id <= 0 || id.isNaN()) {
            redisConnection.emit(failedEvent, {
                requestId,
                eventName,
                data: {
                    message: "Error: Invalid ID"
                }
            })
        }

        const person = {}

        for (let i = 0; i < persons.length; i++) {
            if (String(user[i].id) === messageText) {
                person = user[i];
                break
            }
        }

        if (Object.keys(person).length === 0) {
            redisConnection.emit(failedEvent {
                requestId,
                eventName,
                data: {
                    message: "User with that ID was not found"
                }

            })
            return;
        }

        redisConnection.emit(successEvent, {
            requestId: requestId,
            data: person,
            eventName: eventName
        });
    });

    redisConnection.on("push-data:request:*", async (message, channel) => {
        let requestId = message.requestId;
        let eventName = message.eventName;

        let messageText = message.data.message;
        let successEvent = `${eventName}:success:${requestId}`;
        let failedEvent = `${eventName}:failed:${requestId}`;

        const keys = ["id",
            "first_name",
            "last_name",
            "email",
            "gender",
            "ip_address"
        ]

        for (let i = 0; keys.length; i++) {
            if (!messageText.hasOwnProperty(keys[i])) {
                redisConnection.emit(failedEvent, {
                    requestId,
                    eventName,
                    data: {
                        message: "Error: Missing fields"
                    }
                })
                return;
            }
        }

        for (let key in messageText) {
            if (key === "id") {
                if (parseInt(messageText[key]).isNaN() || parseInt(messageText[key] <= 0)) {
                    redisConnection.emit(failedEvent, {
                        requestId,
                        eventName,
                        data: {
                            message: "Error: Invalid ID"
                        }
                    })
                    return;
                }

            } else {
                if (typeof (messageText[key]) !== "string") {
                    redisConnection.emit(failedEvent, {
                        requestId,
                        eventName,
                        data: {
                            message: "Error: Field must be type String"
                        }
                    })
                    return;
                }
            }

            if (!keys.includes(key)) {
                redisConnection.emit(failedEvent, {
                    requestId,
                    eventName,
                    data: {
                        message: "Error: Additional fields required"
                    }
                })
                return;
            }
        }

        for (let i = 0; i < persons.length; i++) {
            if (persons[i].id == messageText.id) {
                redisConnection.emit(failedEvent, {
                    requestId,
                    eventName,
                    data: {
                        message: "Error: ID already Exists"
                    }
                })
                return;
            }
        }

        persons.push(messageText);

        redisConnection.emit(successEvent, {
            requestId: requestId,
            data: {
                "created": messageText
            },
            eventName: eventName
        });
        return;
    });

    redisConnection.on("delete-data:request:*", async (message, channel) => {
        let requestId = message.requestId;
        let eventName = message.eventName;

        let messageText = message.data.message;
        let successEvent = `${eventName}:success:${requestId}`;
        let failedEvent = `${eventName}:failed:${requestId}`;

        id = parseInt(messageText);

        if (id.isNan() || id <= 0) {
            if (persons[i].id == messageText.id) {
                redisConnection.emit(failedEvent, {
                    requestId,
                    eventName,
                    data: {
                        message: "Error: Invalid ID"
                    }
                })
                return;
            }
        }

        let person = {};
        let num;

        for (let i = 0; i < persons.length; i++) {
            if (String(users[i].id) === messageText) {
                person = persons[i];
                num = i;
                break;
            }
        }

        if (Object.keys(person).length === 0) {
            redisConnection.emit(failedEvent {
                requestId,
                eventName,
                data: {
                    message: "Error: User with that ID was not found"
                }

            })
            return;
        }

        if (num) {
            persons.splice(index, 1);
        }

        redisConnection.emit(successEvent, {
            requestId: requestId,
            data: {
                "deleted": person
            },
            eventName: eventName
        });
        return;
    });

    redisConnection.on("update-data:request:*", async (message, channel) => {
        let requestId = message.requestId;
        let eventName = message.eventName;

        let messageText = message.data.message;
        let successEvent = `${eventName}:success:${requestId}`;
        let failedEvent = `${eventName}:failed:${requestId}`;

        let data = message.data.updates;
        let id = parseInt(messageText);

        if (id.isNan() || id <= 0) {
            redisConnection.emit(failedEvent {
                requestId,
                eventName,
                data: {
                    message: "Error: Invalid ID"
                }
            })
            return;
        }

        let person = {};
        let num;

        for (let i = 0; i < persons.length; i++) {
            if (String(users[i].id) === messageText) {
                num = i;
                person = users[i];
                break;
            }
        }

        if (Object.keys(person).length === 0) {
            redisConnection.emit(failedEvent {
                requestId,
                eventName,
                data: {
                    message: "Error: User with that ID was not found"
                }

            })
            return;
        }

        const keys = ["id",
            "first_name",
            "last_name",
            "email",
            "gender",
            "ip_address"
        ]

        for (let key in updates) {
            if (!keys.includes(key)) {
                redisConnection.emit(failedEvent, {
                    requestId,
                    eventName,
                    data: {
                        message: "Error: Additional Fields Required"
                    }
                })
                return;
            }
        }

        if (key === "id") {
            if (parseInt(updates[key]).isNaN() || parseInt(updates[key]) <= 0) {
                redisConnection.emit(failedEvent, {
                    requestId,
                    eventName,
                    data: {
                        message: "Error: Invalid ID"
                    }
                });
                return;
            }

            for (let i = 0; i < persons.length; i++) {
                if (String(updates[key]) == String(users[i][key])) {
                    redisConnection.emit(failedEvent, {
                        requestId,
                        eventName,
                        data: {
                            message: "Error: User with that ID exists"
                        }
                    });
                    return;
                }
            }
        } else {
            if (typeof (updates[key]) !== "string") {
                redisConnection.emit(failedEvent, {
                    requestId,
                    eventName,
                    data: {
                        message: "Error: Fields need to be typeof String"
                    }
                });
                return;
            }

            for (let key in updates) {
                person[key] = updates[key];
            }

            persons[index] = person;

            redisConnection.emit(successEvent, {
                requestId: reqestId,
                data: {
                    "updated": person
                },
                eventName: eventName
            });
            return;
        }
    });
}

main()
console.log("Worker is running...")