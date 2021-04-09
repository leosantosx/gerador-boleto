const Boleto = require('node-boleto').Boleto
const htmlToPdf = require('html-pdf-node')

const Sftp = require('./sftp')

class BoletoService {

    gerar(response, dadosBoleto){

        const {
            valor, nossoNumero,
            numeroDocumento, cedente,
            cedenteCnpj, agencia,
            codigoCedente, carteira, cpf
        } = dadosBoleto

        if(!cpf){
            return response.status(400).json({ erro: 'campo cpf não encontrado'})
        }

        const boleto = new Boleto({
            banco: 'santander',
            data_emissao: new Date(),
            data_vencimento: new Date(new Date().getTime() + 5 * 24 * 3600 * 1000), // 5 dias futuramente
            valor: Number(valor), // R$ 15,00 (valor em centavos)
            nosso_numero: nossoNumero,
            numero_documento: numeroDocumento,
            cedente,
            cedente_cnpj: cedenteCnpj, // sem pontos e traços 
            agencia,
            codigo_cedente: codigoCedente, // PSK (código da carteira)
            carteira,
        })

        try{
            boleto.renderHTML(function (html) {            
                const config = { format: 'A4' }
                htmlToPdf.generatePdf({ 'content': html }, config)
                .then(pdf => {
                    Sftp.enviar(pdf, cpf);
                })
                
                return response.send(html)
            })
        }catch(err){
            response.status(400).json({ erro: err.message})
        }
    }

    deletar(response, cpf){
        Sftp.deletar(cpf)
        return response.status(204).json()
    }
}

module.exports = new BoletoService