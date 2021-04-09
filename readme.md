# API para geração de boleto em PDF e salvamento no S3


## :wrench: API 

### Rota para gerar boleto
> Exemplo de Request para gerar um boleto
```http
POST http://localhost:3000/api/boleto
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

<p>O boleto irá ser gerado nesse formato:</p>
<img src="https://user-images.githubusercontent.com/48372094/114185152-c698c700-991b-11eb-87cd-2de6608521da.jpg">
<P>Em seguida é salvo no S3 com o nome:</p> 

```boleto-CPF_DO_PAGADOR.pdf```

### Rota para deletar boleto do S3

> Exemplo Request
```http
DELETE https://localhost:3000/api/boleto/CPF_DO_PAGADOR
```
> Retorno do request
<p>É retornando um código de status http 204</p>


### 🧩 Como rodar o projeto

<p>1 - Baixe o <a href="https://nodejs.org/en/">NodeJS</a> no seu pc</p>
<p>2 - instale o git e baixe os arquivos.</p>
<p>3 - Vá até a pasta onde está os arquivos.</p>
<p>4 - No seu cmd ou powershell digite:</p>
<pre><code>npm install
</code></pre>
<p>Caso não consiga fazer os passos anteriores tem a versão executável. faça o <a href="https://github.com/leosantosx/bot-stopots/archive/master.zip">Download</a> dos arquivos e vá até o arquivo bot-stopots e clique nele, logo aguarde que o programa irá executar.</p>


### 🚀 Como executar

_ps: Se precisar de ajuda para fazer um clone, esse [tutorial aqui](https://help.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository) vai te ajudar

1. Abra o terminal do seu computador. Se estiver no Windows pode ser o CMD ou Powershell.
2. Altere o diretório de trabalho atual para o local em que deseja ter o código do módulo salvo no seu computador.
3. Faça um clone desse repositório rodando: <br> `git clone https://github.com/leosantosx/gerador-boleto.git`;
4. Entre na pasta rodando pelo terminal: `cd gerador-boleto`;
5. Rode `npm install` para instalar as dependências do projeto;
6. Rode `npm dev` para iniciar o servidor de desenvolvimento.

### :rocket: Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Repositório do Pagarme](https://github.com/pagarme/node-boleto)

### :memo: Licença

Este projeto está sob a licença MIT. Consulte [LICENÇA](https://github.com/leosantosx/gerador-boleto/blob/master/LICENSE) para obter detalhes.


