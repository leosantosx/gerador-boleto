# API para geração de boleto em PDF e salvamento no S3


### :wrench: API 

### Gerar boleto e salvar no s3

#### Rota para gerar boleto
> Exemplo Request para gerar boleto
```http
POST https://localhost:4000/users
Content-Type: application/json

body:
    {
        "cpf": "33333333333",
        "valor": "3000",
        "nossoNumero": "1234567",
        "numeroDocumento": "123123",
        "cedente": "Pagar.me",
        "cedenteCnpj": "18727053000174",
        "agencia": "3978",
        "codigoCedente": "6404154",
        "carteira": "102"
    }
```

> O boleto irá ser gerado nesse formato e em seguida é salvo no S3 da marche
<img src="https://user-images.githubusercontent.com/48372094/114185152-c698c700-991b-11eb-87cd-2de6608521da.jpg">


#### Rota para deletar boleto

> Exemplo Request
```http
DELETE https://localhost:3000/api/boleto/CPF

> Retorno do request
```
<p>É retornando um código de status http 204</p>


### :rocket: Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Pagarme](https://github.com/pagarme/node-boleto)

### :memo: Licença

Este projeto está sob a licença MIT. Consulte [LICENÇA](https://github.com/leosantosx/gerador-boleto/blob/master/LICENSE) para obter detalhes.


