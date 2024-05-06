import express from 'express'
const app = express()
const port = 3000
const __dirname = import.meta.dirname

import bodyParser from 'body-parser'
import morgan from 'morgan'
import favicon from 'serve-favicon'

// const bodyParser = require('body-parser')
// const morgan = require('morgan')
// const favicon = require('serve-favicon')

// Middleware
app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())

app.get('/', (req, res) => { res.send("Page web 2 !") })

app.listen(port, () => {
    console.log(`Express running and listening on port : ${port}`)
})


