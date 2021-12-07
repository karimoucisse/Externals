const express = require("express")
const app = express()
const axios = require("axios")

app.get('/pokemons/:limit/:offset', (req, res) => {
    const {offset, limit} = req.params
    axios(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not Found"))
})

app.get('/pokemons/:id', (req, res) => {
    const {id} = req.params
    axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not Found"))
})
