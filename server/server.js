const express = require('express')
const app = express()

//Import the Router
const tasks = require('./routes/Tasks')

//Routes
app.get('/', (req, res) => {
    res.send('Homepage')
})

app.use('/tasks', tasks)

const port = 4000
app.listen(port, console.log(`Listening on port: ${port}`))