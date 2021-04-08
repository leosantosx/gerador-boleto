const express = require('express')
const BoletoService = require('../service/boleto')

const routes = express.Router()

routes.post('/boleto', (request, response) => {
    BoletoService.gerar(response, request.body)
})

routes.delete('/boleto/:cpf', (request, response) => {
    const { cpf } = request.params
    BoletoService.deletar(response, cpf)
})

module.exports = routes