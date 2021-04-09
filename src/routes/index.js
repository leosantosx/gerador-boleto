const express = require('express')
const BoletoService = require('../model/boleto')

const routes = express.Router()

routes.post('/api/boleto', (request, response) => {
    BoletoService.gerar(response, request.body)
})

routes.delete('/api/boleto/:cpf', (request, response) => {
    const { cpf } = request.params
    BoletoService.deletar(response, cpf)
})

module.exports = routes