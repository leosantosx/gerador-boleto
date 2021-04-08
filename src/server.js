const express = require('express')
const routes = require('./routes')
require('dotenv').config()

const app = express()
app.use(express.json())

app.use(routes)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})