const Client = require('ssh2-sftp-client')
require('dotenv').config()

const configSftp = {
    host: process.env.HOST_SFTP, 
    username: process.env.USERNAME_SFTP, 
    password: process.env.PASSWORD_SFTP,
    port: process.env.PORT_SFTP,
}

class Sftp {
    enviar(arquivo, cpf){
        
        const sftp = new Client()

        const nomeArq = `boleto-${cpf}.pdf`

        sftp.connect(configSftp)
        .then(() => {
            return sftp.put(arquivo, process.env.DIRECTORY + nomeArq)
        })
        .then(() => {
            sftp.end()
        })
    }

    baixar(cpf, response){
        const caminhoArq = `${process.env.DIRECTORY}boleto-${cpf}.pdf`

        const sftp = new Client();

        sftp.connect(configSftp)
        .then(() => {
            return sftp.get(caminhoArq);
        })
        .then(pdf => {
            sftp.end();
        
            var filename = "boleto.pdf"; 
            response.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
            response.setHeader('Content-type', 'application/pdf');

            response.send(pdf)
        })
    }

    deletar(cpf){

        const caminhoArq = `${process.env.DIRECTORY}boleto-${cpf}.pdf`

        const sftp = new Client();

        sftp.connect(configSftp)
        .then(() => {
            return sftp.delete(caminhoArq);
        })
        .then(() => {
            return sftp.end();
        })
    }
}

module.exports = new Sftp