const express = require("express");
const app = express();
// const static = express.static(__dirname + "/public");

const exphbs = require("express-handlebars");

const Handlebars = require("handlebars");

const handlebarsInstance = exphbs.create({
    defaultLayout: false,
    // Specify helpers which are only registered on this instance.
    helpers: {
        asJSON: (obj, spacing) => {
            if (typeof spacing === "number")
                return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));

            return new Handlebars.SafeString(JSON.stringify(obj));
        }
    },
    partialsDir: ["views/partials/"]
});

app.engine("handlebars", handlebarsInstance.engine);
app.set("view engine", "handlebars");

app.get("/", (req, res) => { 
    res.render("main")
});


app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});