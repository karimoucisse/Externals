const express = require("express")
const app = express()
const axios = require("axios")
const GameOfThrone = require("./GameOfThrone.json")
const port = 5000;

app.get('/game-of-thrones/url', (req, res) => {
    axios.get('https://thronesapi.com/api/v2/Characters')
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not Found"))
})

app.get('/game-of-thrones/json', (req,res) => {
    res.json(GameOfThrone)
})