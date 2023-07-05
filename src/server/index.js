// dotenv
const dotenv = require("dotenv");
dotenv.config();

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

// Require node-fetch v2
const fetch = require("node-fetch");

/* Middleware*/
// Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const path = require("path");

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("dist"));

// Setup Server
const port = 8081;
app.listen(port, listening);

// Callback to debug
function listening() {
    console.log(`server is running on localhost: ${port}`);
}

// API Key
const url = "https://api.meaningcloud.com/sentiment-2.1?";
const apiKey = process.env.API_KEY;
console.log(`Your API Key is: ${process.env.API_KEY}`);

app.get('/', function (req, res) {
    res.sendFile("dist/index.html")
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// POST Route
app.post("/api", async function (req, res) {
    let projectData = req.body.url;
    console.log(`Your Data: ${projectData}`);
    const apiURL = `${url}key=${apiKey}&url=${projectData}&lang=en`;
    const response = await fetch(apiURL);
    try {
        const sData = await response.json();
        //console.log(sData);
        res.send(sData);
    } catch (error) {
        console.log("error", error);
    }
});
