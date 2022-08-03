
<h1 align="center">
    <br>
    <p align="center"> Pokedex - projeto guiado<p>
</h1>

<h1 align="center">
    <br>
    <p align="center"> Semana 13 {reprograma} 🎇<p>
</h1>


<p align="center">
<img src="https://user-images.githubusercontent.com/64453332/182519344-171cb529-702c-4514-b311-e4b8addb61f1.gif" alt="logo reprogramafy" width="500">
</p> <p align="center"> </p>


<center> 

### Apresentação
Este projeto foi desenvolvido na semana 13 do bootcamp {reprograma}, sob orientação da professora Beatriz Ramerindo. Neste projeto podemos manipular um banco de dados para cadastrar treinadores pokemon e também espécies de pokemon. 
Nesta API, executamos todas as funções CRUD e hospedamos o banco de dados no MongoDB.


## Tecnologias Utilizadas 


|  Feramenta    |        Utilidade |
| ------------- | -----------------|
|[JavaScript](https://www.javascript.com) 	    |Linguagem de programação utilizada nesse projeto.| 
|[Node.js](https://nodejs.org/en/)	    |Ambiente de execução do JavaScript.
|[Git](https://git-scm.com) & [GitHub](https://github.com/) | Hospedagem do repositório e controle (versionamento de código).
|[express](https://www.npmjs.com/package/express)	    |Framework do NodeJS.
|[mongoose](https://www.npmjs.com/package/mongoose)|Dependência que interage com o MongoDB. Conecta o projeto ao banco de dados, cria os *models* e as *collections*.
|[nodemon](https://www.npmjs.com/package/nodemon)	    |Observa as atualizações realizadas nos arquivos e roda o servidor automaticamente.
|[cors](https://www.npmjs.com/package/cors)|Torna os recursos da API acessíveis na web.
|[npm](https://docs.npmjs.com/cli/v6/commands/npm-install) 	        |Gerenciador de pacotes do Node.js.
|[Mongodb](https://www.mongodb.com)	    |Banco de dados não relacional orientado a documentos.
|[Mongo Atlas](https://www.mongodb.com/cloud/atlas/register)	|Interface gráfica para verificar se os dados foram persistidos.
|[Postman](https://documenter.getpostman.com/view/16821311/UVRAHSEo)	    |Interface gráfica para realizar os testes dos protocolos http.
|[dotenv](https://www.npmjs.com/package/dotenv)|Dependência que gerencia as variáveis de ambiente.

<br>

 ## 🗃️ Arquitetura MRC 
 ```
 📁 Projeto-Cirandeiras
   |
   |- 📁 src
   |   |
   |   |- 📁 controllers
   |       |- 📑 coachController.js
   |       |- 📑 pokedexController.js
   |          |         
   |   |- 📁 database
   |       |- 📑 mongooseConect.js
   |
   |   |- 📁 models
   |       |- 📑 coachModel.js
   |       |- 📑 pokedexModel.js
   |              
   |   |- 📁 routes
   |       |- 📑 coachRoutes.js
   |       |- 📑 pokedexRoutes.js
   |                   
   |   |- 📑 app.js
   |       | 
   |           
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |  📑 README.md
   |- 📑 server.js
   
   ```
 <br>

 ## 📃  Regras de negócio 

- Não será possível cadastrar mais de um treinador com o mesmo nome.
- Para cadastrar um novo pokemon, no momento do cadastro, é necessário, vinculá-lo a um treinador já existente no sistema, através do ID do treinador correspondente. Este ID deverá ser enviado no corpo da requisição.

 
## Rotas/endpoints

 - [x] GET "/treinadores" - Deverá retornar todos os treinadores cadastrados.

 - [x] GET "/treinador/[id] - Deverá retornar o treinador com o id informado.

 - [x] GET "/pokedex" - Deverá retornar todos os pokemons cadastrados e os seus treinadores.

 - [x] GET "/pokedex/[id] - Deverá retornar o pokemon com o id informado e o seu treinador

 - [x] POST "/treinador" - Deverá criar um treinador

 - [x] POST "/pokedex" - Deverá criar um pokemon

 - [x] DELETE "/treinadores/[ID]" - Deverá deletar um treinador por id específico e retorna mensagem amigável

 - [x] DELETE "/pokedex/[ID]" - Deverá deletar um pokemon por id específico e retorna mensagem amigável

 - [x] PATCH "/treinadores/[ID]" - Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado

 - [x] PATCH "/pokedex/[ID]" - Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado

Este projeto foi desenvolvido durante o bootcamp:
<p align="center">
<img src="https://user-images.githubusercontent.com/64453332/181824592-356442f6-1286-49ba-a8ce-51f6c66a71b9.png" alt="logo reprogramafy" width="200">
</p> <p align="center"> </p>

<p align="center">
<img src="https://user-images.githubusercontent.com/64453332/182519299-f517545c-3f7f-4bc7-a4dc-00f27914614f.gif" alt="logo reprogramafy" width="500">
</p> <p align="center"> </p>


