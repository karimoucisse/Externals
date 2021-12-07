const express = require("express")
const app = express()
const axios = require("axios")
const gameofthrone = require("./gamoofthrone")
const pokemon = require("./pokemon")
const port = 5000;


app.get('/', (req, res) => {
    res.send("hello word")
})


app.listen(port, () => {
    console.log('Server started on port: ' + port);
})