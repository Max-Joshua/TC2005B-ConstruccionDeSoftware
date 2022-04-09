// const express = require('express')
import express from "express";

const app = express()
const port = 3000

app.get('/api/hello', (request, response)=>{
    const query = request.query
    console.log(query) 
    response.send(`Hello ${query.name} ${query.surname} from api!`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
