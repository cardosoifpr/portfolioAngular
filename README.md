# Portfólio Angular

## 📖 Descrição do Projeto

Este projeto foi desenvolvido utilizando o framework **Angular** como parte das atividades do 2º trimestre. O objetivo é criar uma aplicação web moderna seguindo o conceito de **SPA (Single Page Application)**, onde a navegação acontece sem recarregar a página inteira, proporcionando uma experiência mais fluida ao usuário.

Diferentemente do projeto desenvolvido anteriormente em PHP, onde cada página era gerada pelo servidor a cada requisição, o Angular executa a maior parte da lógica no navegador por meio de JavaScript e TypeScript, atualizando apenas os elementos necessários da interface.

---

## 🛠️ Tecnologias Utilizadas

### Node.js

O Node.js permite executar JavaScript fora do navegador, sendo responsável por executar as ferramentas utilizadas durante o desenvolvimento Angular.

Pode ser entendido como o **motor** do projeto, responsável por executar os comandos necessários para criar, compilar e servir a aplicação.

### npm (Node Package Manager)

O npm acompanha a instalação do Node.js e funciona como um **gerenciador de pacotes**. Ele é responsável por instalar e organizar todas as dependências utilizadas pelo projeto.

Exemplos de uso:

```bash
npm install
npm install -g @angular/cli
```

O parâmetro `-g` instala uma ferramenta globalmente no sistema operacional, permitindo seu uso em qualquer diretório.

### Angular CLI

O Angular CLI (Command Line Interface) é a ferramenta oficial utilizada para criar e administrar projetos Angular.

Principais comandos utilizados:

```bash
ng new portfolioAngular
```

Cria um novo projeto Angular já configurado.

```bash
ng serve
```

Inicia o servidor de desenvolvimento da aplicação.

---

## 🎨 Angular Material

O projeto utiliza o Angular Material, biblioteca oficial baseada no Material Design do Google.

Instalação:

```bash
ng add @angular/material
```

Essa biblioteca disponibiliza componentes visuais prontos, como:

- Botões
- Menus
- Barras de navegação
- Cards
- Campos de formulário

Todos já configurados seguindo padrões de acessibilidade e design modernos.

---

## 🧩 Estrutura de Componentes

A unidade básica de construção de uma aplicação Angular é o **componente**.

Exemplo:

### `app.ts`

Responsável pela lógica da aplicação.

### `app.html`

Responsável pela interface exibida ao usuário.

A comunicação entre lógica e interface ocorre por meio da **interpolação**:

```html
{{ title() }}
```

Neste projeto, `title` é um **signal**, recurso moderno do Angular utilizado para armazenar valores reativos.

---

## 🌐 Funcionamento do `ng serve`

Ao executar:

```bash
ng serve
```

o Angular:

1. Compila o projeto.
2. Inicia um servidor local de desenvolvimento.
3. Monitora alterações nos arquivos.
4. Atualiza automaticamente o navegador (Live Reload).

Por padrão, a aplicação fica disponível em:

```text
http://localhost:4200
```

---

## 🔌 Port Forwarding no Codespaces

Como o desenvolvimento foi realizado utilizando GitHub Codespaces, a aplicação não roda diretamente no computador do usuário, mas em um servidor remoto.

O recurso de **Port Forwarding** cria uma conexão segura entre a porta do servidor remoto e o navegador local, permitindo visualizar a aplicação normalmente.

---

## 📦 Dependências e `node_modules`

A pasta `node_modules` contém todas as bibliotecas utilizadas pelo projeto.

Ela não é enviada ao GitHub porque:

- Possui milhares de arquivos.
- Pode ocupar centenas de megabytes.
- Pode ser recriada automaticamente.

Para reinstalar as dependências basta executar:

```bash
npm install
```

O npm utiliza o arquivo `package.json` como referência para baixar todas as bibliotecas necessárias.

---

## 🚫 Arquivos Ignorados pelo Git

O arquivo `.gitignore` impede que arquivos desnecessários sejam enviados ao repositório, incluindo:

```text
node_modules/
dist/
.angular/
```

Isso mantém o repositório mais leve e organizado.

---

## 📂 Estrutura do Repositório

O projeto está organizado seguindo a estrutura padrão do Angular, onde os componentes ficam dentro da pasta `src/app`.

```text
portfolioAngular/
├── .angular/
├── .vscode/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   ├── contato/
│   │   ├── home/
│   │   ├── projetos/
│   │   ├── sobre/
│   │   ├── app.config.ts
│   │   ├── app.css
│   │   ├── app.html
│   │   ├── app.routes.ts
│   │   ├── app.spec.ts
│   │   └── app.ts
│   ├── index.html
│   ├── main.ts
│   ├── material-theme.scss
│   └── styles.css
├── .editorconfig
├── .gitignore
├── .prettierrc
├── angular.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

Cada pasta dentro de `app` representa um componente da aplicação:

- **`home/`** → página inicial;
- **`sobre/`** → informações pessoais e trajetória acadêmica;
- **`projetos/`** → projetos desenvolvidos;
- **`contato/`** → formas de contato.

Essa divisão facilita a manutenção e reutilização dos componentes, seguindo a arquitetura baseada em componentes proposta pelo Angular.

---

## 🧭 Roteamento e Navegação

A navegação entre as páginas é realizada por meio do Angular Router, configurado no arquivo:

```text
src/app/app.routes.ts
```

As rotas permitem que a aplicação funcione como uma **SPA (Single Page Application)**, atualizando apenas os componentes necessários sem recarregar toda a página.

Exemplo de configuração:

```ts
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'contato', component: ContatoComponent }
];
```

A navegação é feita utilizando a diretiva `routerLink`:

```html
<a routerLink="/">Home</a>
<a routerLink="/sobre">Sobre</a>
<a routerLink="/projetos">Projetos</a>
<a routerLink="/contato">Contato</a>
```

---

## ✅ Utilização do `routerLinkActive`

Além do `routerLink`, o projeto utiliza a diretiva `routerLinkActive`, responsável por identificar qual rota está atualmente ativa e aplicar uma classe CSS automaticamente.

Exemplo:

```html
<a routerLink="/" routerLinkActive="ativo">Home</a>
<a routerLink="/sobre" routerLinkActive="ativo">Sobre</a>
<a routerLink="/projetos" routerLinkActive="ativo">Projetos</a>
<a routerLink="/contato" routerLinkActive="ativo">Contato</a>
```

Quando uma página é acessada, a classe `ativo` é adicionada ao link correspondente.

Exemplo de estilização:

```css
.ativo {
  color: #1976d2;
  font-weight: bold;
}
```

Dessa forma, o usuário consegue visualizar facilmente em qual seção da aplicação se encontra, melhorando a experiência de navegação e tornando a interface mais intuitiva.

---

# 🔌 API em Node.js

## Aula 21: API em Node

Uma segunda versão da API, em JavaScript, na pasta `api-node/`. O contrato de `GET /api/projetos` é o mesmo do `api/projetos.php`.

Para iniciar a API, entre na pasta `api-node/`:

```bash
cd api-node
```

Instale as dependências:

```bash
npm install
```

Depois, ainda dentro da pasta `api-node/`, inicie o servidor:

```bash
node server.js
```

A API sobe em:

```text
http://localhost:3000
```

> **Importante:** o comando `node server.js` deve ser executado dentro da pasta `api-node/`.

Os testes com `curl` são executados na **raiz do repositório**, ou seja, fora da pasta `api-node/`.

Na raiz do repositório, teste com:

```bash
curl -i http://localhost:3000/api/projetos
```

---

## Aula 22: a API lê do banco

Antes de subir a API, o MariaDB precisa estar de pé:

```bash
sudo service mariadb start
```

Depois, entre na pasta `api-node/` e inicie a API:

```bash
cd api-node
node server.js
```

Com a API em funcionamento, volte para a **raiz do repositório** para executar os testes com `curl`.

Rotas que leem do `dwii_db`:

```bash
curl -i http://localhost:3000/api/projetos
```

```bash
curl -i http://localhost:3000/api/projetos/5
```

```bash
curl -i http://localhost:3000/api/tecnologias
```

---

## Aula 23: a API cria, altera e apaga

A API em uso é a de `api-node/`. Os arquivos `api/*.php` e `conexao.php` ficam no repositório como histórico do 2º trimestre.

A API deve estar sendo executada dentro da pasta `api-node/`:

```bash
cd api-node
node server.js
```

Os comandos de teste abaixo devem ser executados na **raiz do repositório**.

### Criar um projeto

```bash
curl -i -X POST http://localhost:3000/api/projetos \
-H "Content-Type: application/json" \
-d '{"nome":"Projeto de teste 2","ano":2026}'
```

### Alterar um projeto

```bash
curl -i -X PUT http://localhost:3000/api/projetos/7 \
-H "Content-Type: application/json" \
-d '{"nome":"Projeto de Teste (editado)","ano":2026}'
```

### Apagar um projeto

```bash
curl -i -X DELETE http://localhost:3000/api/projetos/7
```

---

## Aula 24: a tranca

Quem escreve precisa de um token. Antes do primeiro uso, crie a tabela e o dono:

```bash
sudo mariadb dwii_db < sql/usuarios.sql
```

O comando abaixo deve ser executado dentro da pasta `api-node/`:

```bash
cd api-node
npm install
node criar-usuario.js rafaela@gmail.com <senha>
```

Depois, inicie a API:

```bash
node server.js
```

Com a API em funcionamento, os comandos de login e os testes das rotas devem ser executados na **raiz do repositório**.

### Login correto

```bash
curl -i -X POST http://localhost:3000/api/login \
-H "Content-Type: application/json" \
-d '{"email":"rafaela@gmail.com","senha":"<senha>"}'
```

**Resposta:**

```text
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 188
ETag: W/"bc-reh8UI6nf1Juoni7WLbFBqASKy8"
Date: Sun, 25 Oct 2026 19:55:38 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"token":"<token gerado no login>"}
```

### Login com senha incorreta

```bash
curl -i -X POST http://localhost:3000/api/login \
-H "Content-Type: application/json" \
-d '{"email":"rafaela@gmail.com","senha":"<senha>"}'
```

**Resposta:**

```text
HTTP/1.1 401 Unauthorized
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 62
ETag: W/"3e-7ig1MRwHlLP9az3HUIFuFrCIvuA"
Date: Sun, 25 Oct 2026 19:56:15 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"erro":"Email ou senha inválidos. Confira suas credenciais"}
```

### Login com email inexistente

```bash
curl -i -X POST http://localhost:3000/api/login \
-H "Content-Type: application/json" \
-d '{"email":"ninguem@portfolio.dev","senha":"<senha>"}'
```

**Resposta:**

```text
HTTP/1.1 401 Unauthorized
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 62
ETag: W/"3e-7ig1MRwHlLP9az3HUIFuFrCIvuA"
Date: Sun, 25 Oct 2026 19:56:15 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"erro":"Email ou senha inválidos. Confira suas credenciais"}
```

### Login sem senha

```bash
curl -i -X POST http://localhost:3000/api/login \
-H "Content-Type: application/json" \
-d '{"email":"rafaela@gmail.com"}'
```

**Resposta:**

```text
HTTP/1.1 400 Bad Request
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 32
ETag: W/"20-sqCMSDh77HwmN9gNyVfEQ10XtLs"
Date: Sun, 25 Oct 2026 20:00:54 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"erro":"Informe email e senha"}
```

O login retorna um token JWT. Esse token deve ser utilizado nas requisições que alteram os projetos.

### Criar um projeto

```bash
curl -i -X POST http://localhost:3000/api/projetos \
-H "Authorization: Bearer $TOKEN" \
-H "Content-Type: application/json" \
-d '{"nome":"Projeto com tranca","ano":2026}'
```

**Resposta:**

```text
HTTP/1.1 201 Created
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 8

{"id":8}
```

### O mesmo POST sem o token

```bash
curl -i -X POST http://localhost:3000/api/projetos \
-H "Content-Type: application/json" \
-d '{"nome":"Qualquer um cria","ano":2026}'
```

**Resposta:**

```text
HTTP/1.1 401 Unauthorized
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 24

{"erro":"Acesso não autorizado. Token de autenticação nao informado."}
```

### O mesmo POST com o token com o último caractere trocado

```bash
curl -i -X POST http://localhost:3000/api/projetos \
-H "Authorization: Bearer ${TOKEN%?}x" \
-H "Content-Type: application/json" \
-d '{"nome":"Qualquer um cria","ano":2026}'
```

**Resposta:**

```text
HTTP/1.1 401 Unauthorized
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 37

{"erro":"Token invalido ou expirado. Acesso nao autorizado"}
```

### Testes GET 

**1. Login — gerar o token de autenticação**

```bash
curl -X POST http://localhost:3000/api/login \
-H "Content-Type: application/json" \
-d '{"email":"rafaela@gmail.com","senha":"<senha>"}'
```

```json
{"token":"SEU_TOKEN"}
```

Depois de receber o token, salve-o na variável:

```bash
export TOKEN="COLE_AQUI_O_TOKEN"
```

Para visualizar o token:

```bash
echo "$TOKEN"
```

Resposta: 

A saída será o token gerado no login, exibido como texto.

**2. GET `/api/projetos/todos` — com token**

Retorna todos os projetos cadastrados, inclusive os não publicados.

```bash
curl http://localhost:3000/api/projetos/todos \
-H "Authorization: Bearer $TOKEN"
```

Resposta:

```json
[{"id":1,"nome":"Portfolio Pessoal","descricao":"Site de portfolio responsivo com PHP, PDO e MariaDB, painel admin e login.","tecnologias":"PHP, MariaDB, CSS, Git","link_github":"https://github.com/usuario/portfolio","status":"publicado","ano":2026},{"id":5,"nome":"API de Clima","descricao":"Microsservico que consome uma API publica e devolve a previsao em JSON.","tecnologias":"PHP, REST","link_github":"https://github.com/usuario/clima","status":"publicado","ano":2026},{"id":6,"nome":"Jogo da Velha (em construcao)","descricao":"Jogo da velha local - ainda em desenvolvimento.","tecnologias":"JavaScript, HTML","link_github":null,"status":"rascunho","ano":2026},{"id":12,"nome":"aaaaaaaaaaaaaaaa","descricao":"aaaaaaaaaaaaaa","tecnologias":"aaaaaaaaaaaaaa","link_github":"aaaaaaaaaaaaaaaa","status":"publicado","ano":2026},{"id":14,"nome":"Projeto de teste 2","descricao":"","tecnologias":"","link_github":"","status":"publicado","ano":2026},{"id":3,"nome":"App de Tarefas","descricao":"Lista de tarefas com categorias, prazos e filtro por status.","tecnologias":"JavaScript, HTML, CSS","link_github":"https://github.com/usuario/tarefas","status":"publicado","ano":2025},{"id":4,"nome":"Loja Virtual (prototipo)","descricao":"Catalogo de produtos com carrinho e checkout simulado.","tecnologias":"PHP, MariaDB, JavaScript","link_github":"https://github.com/usuario/loja","status":"publicado","ano":2024}]
```

**3. GET `/api/projetos/:id` — projeto por ID**

Retorna os dados de um projeto publicado pelo seu ID.

```bash
curl http://localhost:3000/api/projetos/1
```

Resposta:

```json
{"id":1,"nome":"Portfolio Pessoal","descricao":"Site de portfolio responsivo com PHP, PDO e MariaDB, painel admin e login.","tecnologias":"PHP, MariaDB, CSS, Git","link_github":"https://github.com/usuario/portfolio","ano":2026}
```

**4. GET `/api/projetos/todos` — sem token**

Verifica se a rota bloqueia acessos sem autenticação.

```bash
curl http://localhost:3000/api/projetos/todos
```

Resposta:

```json
{
  "erro": "Acesso não autorizado. Token de autenticação nao informado."
}
```

### Alterar um projeto

```bash
curl -i -X PUT http://localhost:3000/api/projetos/17 \
-H "Authorization: Bearer $TOKEN" \
-H "Content-Type: application/json" \
-d '{"nome":"Projeto com tranca (editado)","ano":2026}'
```

**Resposta:**

```text
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 33

{"mensagem":"Projeto atualizado"}
```

### Mesmo comando sem o token

```bash
curl -i -X PUT http://localhost:3000/api/projetos/17 \
-H "Content-Type: application/json" \
-d '{"nome":"Qualquer um edita","ano":2026}'
```

**Resposta:**

```text
HTTP/1.1 401 Unauthorized
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 24

{"erro":"Acesso não autorizado. Token de autenticação nao informado."}
```

### Apagar um projeto

```bash
curl -i -X DELETE http://localhost:3000/api/projetos/8 \
-H "Authorization: Bearer $TOKEN"
```

**Resposta:**

```text
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: *
Date: Sun, 25 Oct 2026 20:15:58 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### Mesmo comando sem TOKEN

```bash
curl -i -X DELETE http://localhost:3000/api/projetos/17 \
-H "Authorization"
```

**Resposta:**

```text
HTTP/1.1 401 Unauthorized
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 74
ETag: W/"4a-nCyrS9xXSYZCWypg9v2GKs5WW+I"
Date: Sun, 25 Oct 2026 20:17:33 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"erro":"Acesso não autorizado. Token de autenticação nao informado. "}
```

### ID que não existe

```bash
curl -i -X DELETE http://localhost:3000/api/projetos/08 \
-H "Authorization: Bearer $TOKEN"
```

**Resposta:**

```text
HTTP/1.1 404 Not Found
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 33
ETag: W/"21-KzJbE6j+laabV/sOTO7Xtcjmk8c"
Date: Sun, 25 Oct 2026 20:18:13 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"erro":"Projeto nao encontrado"}
```

---

### Aula 25: o Portfolio em React

O front novo nasce em `portfolio-rect/` (Vite + React), ao lado do Angular. Para rodar:

```bash
cd portfolio-react
```
```bash
npm install
```
```bash
npm run dev
```

```text
A tela abre na porta 5173. Por enquanto os projetos sao fixos no `src/App.jsx`; a Aula 27 os traz da API.
```
### Aula 26: estado, lista e formulario

Os projetos sairam do `App.jsx` e moram em `src/projetos.js`. A tela os desenha com `map`.

O formulario de contato (`src/Contato.jsx`) guarda o que a pessoa digita no estado, com `useState`.

Ele ainda nao envia nada: avisa e limpa os campos. O envio de verdade chega com a API.


## 📋 Resumo da execução

A ordem para executar e testar a API é:

1. Na raiz do repositório, iniciar o MariaDB:

   ```bash
   sudo service mariadb start
   ```

2. Entrar na pasta `api-node/`:

   ```bash
   cd api-node
   ```

3. Instalar as dependências, se necessário:

   ```bash
   npm install
   ```

4. Iniciar a API:

   ```bash
   node server.js
   ```

5. Manter o servidor Node.js rodando.

6. Em outro terminal, voltar para a **raiz do repositório**:

   ```bash
   cd ..
   ```

7. Executar os comandos `curl` para testar as rotas.

Assim, `node server.js` é executado dentro de `api-node/`, enquanto os comandos `curl` usados para demonstrar o funcionamento da API são executados a partir da raiz do repositório.

---

## 🔐 Validade do token JWT

O token JWT utilizado pela API possui validade de **3 horas**. Essa configuração foi definida no momento da criação do token, utilizando a propriedade `expiresIn`:

```js
const token = jwt.sign(
  { id: usuario.id, email: usuario.email },
  SEGREDO,
  { expiresIn: '3h' }
);
```

A escolha de 3 horas permite que o usuário utilize a API durante um período suficiente para realizar as operações necessárias, mas limita o tempo em que um token eventualmente exposto poderia ser utilizado. Após esse período, o token expira e é necessário realizar o login novamente para obter um novo token.

Essa configuração também demonstra o uso de expiração de credenciais como medida de segurança na autenticação da API.

---

## 🔑 Resposta única de login

### Resposta única do login

Em caso de credenciais inválidas, tanto para email inexistente quanto para senha incorreta, a API retorna a mesma resposta `401 Unauthorized`:

```json
{
  "erro": "Email ou senha inválidos. Confira suas credenciais."
}
```

Dessa forma, a API não informa qual dos dados está incorreto.

---

## 🔒 Autenticação e rotas da API

A API utiliza autenticação por token JWT nas operações que alteram os dados e nas rotas que precisam de acesso restrito.

O token é gerado pela rota de login e deve ser enviado no cabeçalho `Authorization` no formato:

```text
Bearer TOKEN
```

A autenticação é centralizada em um único middleware chamado `autenticar`, que utiliza `jwt.verify()` para validar o token.

As rotas protegidas utilizam esse middleware, sem repetir a verificação do token em cada rota.

---

## 📋 Tabela de rotas

| Rota | Verbo | Token |
|---|---|---|
| `/api/projetos` | GET | Não |
| `/api/projetos/todos` | GET | Sim |
| `/api/projetos/:id` | GET | Não |
| `/api/projetos` | POST | Sim |
| `/api/projetos/:id` | PUT | Sim |
| `/api/projetos/:id` | DELETE | Sim |
| `/api/tecnologias` | GET | Sim |
| `/api/tecnologias/:id` | GET | Não |
| `/api/tecnologias` | POST | Sim |
| `/api/tecnologias/:id` | PUT | Sim |
| `/api/tecnologias/:id` | DELETE | Sim |
| `/api/login` | POST | Não |

Na rota `/api/projetos/todos`, o token é obrigatório e a consulta retorna todos os projetos, incluindo os que estão como `rascunho`.

Já `/api/projetos` retorna somente os projetos com status `publicado`.

---

## 🚧 O que a API ainda não faz

A API ainda não possui cadastro de usuários pela própria API, recuperação ou alteração de senha e diferentes níveis de permissão entre usuários.

As rotas protegidas verificam se o token JWT é válido, mas não possuem diferentes níveis de acesso.

Também não há, até o momento, paginação ou filtros nas listagens e nem uma documentação automática da API, como Swagger/OpenAPI.

---

## 🧠 Por que o acesso de dados no service e não no componente?

O acesso aos dados foi implementado nos services, e não diretamente nos componentes, seguindo as boas práticas do Angular.

Essa abordagem separa as responsabilidades da aplicação: os componentes ficam responsáveis apenas pela interface e pela interação com o usuário, enquanto os services concentram toda a lógica de comunicação com a API.

---

# 🎯 Autoavaliação

## Conceito pretendido: A

### Justificativa (cite o arquivo de cada critério)

- **Consumo da API (Projetos):** `projeto.service.ts` (requisição HTTP GET) e `projetos.ts` (consumo dos dados).
- **Consumo da API (Catálogo):** `tecnologia.service.ts` (requisição HTTP GET) e `catalogo.ts`/`catalogo.html` (exibição das tecnologias utilizando `async` pipe).
- **Botão "Ver no GitHub":** `projetos.html` utilizando property binding com `[href]="p.link_github"`.
- **Tratamento de erro:** `projetos.ts` e `catalogo.ts`.
- **Tratamento de lista vazia ("nenhum item ainda"):** `projetos.html` e `catalogo.html`.
- **URL centralizada:** `api.ts`, utilizada pelos arquivos `projeto.service.ts` e `tecnologia.service.ts`.
- **Boas práticas:** toda a comunicação com a API foi implementada nos services, enquanto os componentes ficaram responsáveis apenas pela apresentação dos dados.
- **Uso do `async` pipe:** `catalogo.html`, consumindo os dados sem utilizar `subscribe()`.

---

# 🎯 Autoavaliação — Formulários

## Conceito pretendido: A

### Justificativa (cite o arquivo/linha de cada critério)

- **Form reativo + erro por campo:** `contato.html` (mensagens com `touched`) + `contato.ts` (Validators): as mensagens que analisam erro por campo estão na linha 34 (nome), 50 (email) e 66 (mensagem) e usam `form.validate` e `touched` como parâmetro. Os validators estão no `contato.ts` da linha 21 a 25.

- **POST via service + tratamento:** `contato.service.ts` (`http.post`) + `contato.ts` (`subscribe next/error`): `http.post` está na linha 17 do `contato.service.ts`. O `return` envia os dados do formulário para o PHP via POST e retorna a resposta para o componente tratar com `subscribe()`. Na linha 44 e 45 eu usei o `subscribe` e o `next`. A lógica indica que o `subscribe` acompanha a resposta da requisição, e `next` executa quando o envio dá certo, mostrando a mensagem, limpando o formulário e encerrando o estado de envio.

- **Endpoint PHP (`php://input`, validação, prepared, 201/400):** `api/contato.php`: endpoint está na linha 15 do `contato.php`, prepared: 35, validação: 21 a 25, 201: 38, 401: 28.

- **Estados/robustez/UX (DUA):** `contato.html` (labels `for/id`, sem cor única) + `contato.ts` (estado enviando): Estados/robustez/UX: 28, 44 e 60. Estado enviando: linha 50 do `contato.ts`.

---

# 🎯 Autoavaliação — CRUD

## Conceito pretendido: A — Plena

Considero que alcancei o conceito **A**, pois implementei o CRUD completo da API, desenvolvi a área de gestão no Angular, tratei os principais erros e realizei testes das requisições. Também compreendi como frontend, service, API e banco de dados se relacionam.

### R1 — API e CRUD

Implementei as quatro operações do CRUD no arquivo `api/projetos.php`.

- **GET:** consulta e lista os projetos.
- **POST:** cria novos projetos e retorna `201 Created`.
- **PUT:** altera projetos existentes e retorna `200 OK`.
- **DELETE:** exclui projetos e retorna `204 No Content`.

A API identifica a operação através de `$_SERVER['REQUEST_METHOD']`, permitindo que o mesmo endereço execute ações diferentes de acordo com o verbo HTTP.

Também utilizei `prepare()` e `execute()` nas operações de escrita, evitando colocar diretamente os dados do usuário dentro das consultas SQL e ajudando a prevenir SQL Injection.

Além disso, implementei os tratamentos de `400`, `404` e `405` e testei as respostas utilizando `curl`.

**Arquivo:** `api/projetos.php`

### R2 — Tela de Gestão

Criei a rota `/gestao` para administrar os projetos do portfólio.

A tela permite:

- adicionar projetos;
- editar projetos;
- excluir projetos;
- validar os campos do formulário;
- confirmar antes de excluir;
- visualizar os projetos cadastrados;
- utilizar o `ProjetoService` para realizar as requisições.

O componente não realiza chamadas HTTP diretamente. A comunicação com a API fica concentrada no service, mantendo uma separação entre a interface e o backend.

**Arquivos principais:**

- `portfolio-angular/src/app/gestao/gestao.ts`
- `portfolio-angular/src/app/gestao/gestao.html`
- `portfolio-angular/src/app/gestao/gestao.css`
- `portfolio-angular/src/app/projeto.service.ts`
- `portfolio-angular/src/app/app.routes.ts`

### R3 — Atualização sem F5

Implementei a atualização da lista sem precisar recarregar manualmente a página.

Depois de criar ou editar um projeto, a lista é atualizada e o formulário retorna ao modo de adicionar projeto. Na exclusão, o projeto é removido imediatamente do array local utilizando `filter()`.

Entendi que existem duas estratégias possíveis: buscar novamente os dados na API ou modificar o array local. A atualização local evita uma nova requisição, mas pode ficar desatualizada caso outra pessoa ou processo altere o banco.

### R4 — Justificativa e testes

Realizei testes utilizando `curl` e a aba **Network** do DevTools para verificar os métodos, status e respostas da API.

Os principais resultados foram:

- `POST` → `201 Created`, porque um novo recurso foi criado.
- `PUT` → `200 OK`, porque um recurso existente foi alterado.
- `DELETE` → `204 No Content`, porque a exclusão foi concluída sem necessidade de retornar conteúdo.
- `400 Bad Request` → quando os dados enviados são inválidos.
- `404 Not Found` → quando o projeto informado não existe.
- `405 Method Not Allowed` → quando o método HTTP não é permitido.

Também compreendi o funcionamento do `OPTIONS` e do pré-voo CORS. O navegador pode verificar primeiro se o servidor permite determinada operação, como um `DELETE`, antes de enviar a requisição principal.

### R5 — Acabamento e entrega

Também considerei os aspectos de acabamento da aplicação, principalmente responsividade, acessibilidade e estados da interface.

Utilizei `label` associado aos campos do formulário, mensagens de erro em texto e procurei manter a navegação adequada pelo teclado. Também verifiquei os estados de carregamento, lista vazia e erro para evitar que a interface simplesmente fique em branco.

O projeto foi salvo no Git e enviado para o repositório com `git push`.

---


## 📚 Conceitos que consolidei

Durante a atividade, consegui consolidar os seguintes conceitos:

- CRUD;
- API REST;
- métodos HTTP;
- códigos de status HTTP;
- JSON;
- CORS e `OPTIONS`;
- PHP e PDO;
- SQL parametrizado;
- `prepare()` e `execute()`;
- prevenção de SQL Injection;
- Angular Services;
- `HttpClient`;
- `Observable`;
- TypeScript;
- formulários reativos;
- `FormGroup`;
- `patchValue()`;
- `subscribe()`;
- rotas do Angular;
- atualização de estado;
- validação de formulários;
- DevTools e Network;
- `curl`;
- Git e GitHub.

---

# 🎯 Autoavaliação Geral do Projeto

## Conceito pretendido: A — Plena

Considero que alcancei o conceito **A**, pois desenvolvi diferentes partes do projeto, apliquei os conceitos trabalhados nas aulas e compreendi como frontend, backend, APIs e banco de dados se relacionam. Durante o desenvolvimento, trabalhei com Angular, Angular Material, React, PHP, Node.js, Express, MariaDB, SQL, PDO, TypeScript, JavaScript, HTML e CSS.

### 1. Desenvolvimento Frontend — Angular

Desenvolvi uma aplicação utilizando Angular, seguindo o conceito de **SPA (Single Page Application)**, em que a navegação acontece sem recarregar a página inteira.

Trabalhei com:
- Angular e TypeScript;
- Angular CLI;
- Angular Material e Material Design;
- Node.js e npm;
- componentes e separação entre lógica e interface;
- interpolação;
- signals;
- Angular Router;
- configuração de rotas;
- diretivas `routerLink` e `routerLinkActive`;
- property binding;
- organização de componentes;
- services e separação de responsabilidades;
- atualização e apresentação de dados.

Também utilizei `ng serve` para executar a aplicação, Live Reload para acompanhar alterações e Port Forwarding do GitHub Codespaces para visualizar o projeto no navegador.

### 2. Consumo de APIs

Implementei a comunicação entre o frontend Angular e as APIs por meio de services.

Trabalhei com:
- `HttpClient`;
- requisições HTTP GET e POST;
- Observable;
- `subscribe()`;
- pipe `async`;
- consumo de dados de projetos e tecnologias;
- centralização da URL da API;
- tratamento de erros;
- tratamento de listas vazias;
- exibição condicional de informações;
- separação entre comunicação com a API e apresentação dos dados.

Utilizei os arquivos `projeto.service.ts`, `tecnologia.service.ts` e `api.ts` para organizar essa comunicação.

### 3. Formulários

Desenvolvi formulários com validação e tratamento das informações inseridas pelo usuário.

Trabalhei com:
- formulários reativos;
- `FormGroup`;
- Validators;
- validação por campo;
- propriedades `touched` e `form`;
- `patchValue()`;
- mensagens de erro;
- envio de dados por POST;
- `subscribe()`;
- tratamento de sucesso e erro;
- estado de envio;
- limpeza dos campos após o envio;
- labels associados aos campos por meio de `for` e `id`;
- acessibilidade e experiência do usuário.

Também implementei o envio do formulário de contato para o backend PHP, utilizando `http.post`.

### 4. Backend com PHP

Desenvolvi APIs utilizando PHP para realizar operações e disponibilizar dados ao frontend.

Trabalhei com:
- PHP;
- endpoints;
- `$_SERVER['REQUEST_METHOD']`;
- `php://input`;
- leitura de dados enviados em JSON;
- validação de informações;
- respostas HTTP;
- códigos de status;
- PDO;
- conexão com banco de dados;
- consultas SQL;
- `prepare()` e `execute()`;
- SQL parametrizado;
- prevenção de SQL Injection;
- tratamento de erros;
- API de projetos;
- API de tecnologias;
- endpoint de contato.

### 5. Banco de Dados

Utilizei MariaDB e SQL para armazenar e consultar os dados do projeto.

Trabalhei com:
- MariaDB;
- banco de dados `dwii_db`;
- tabelas;
- consultas SQL;
- leitura e escrita de dados;
- operações de inserção, atualização e exclusão;
- integração entre banco de dados e backend;
- prepared statements;
- parâmetros nas consultas;
- proteção contra SQL Injection.

### 6. API REST e CRUD

Implementei operações de CRUD para administrar os projetos.

Trabalhei com os métodos HTTP:

- **GET:** consultar e listar projetos;
- **POST:** cadastrar novos projetos;
- **PUT:** atualizar projetos existentes;
- **DELETE:** excluir projetos.

Também compreendi e utilizei códigos de status HTTP:
- `200 OK`;
- `201 Created`;
- `204 No Content`;
- `400 Bad Request`;
- `401 Unauthorized`;
- `404 Not Found`;
- `405 Method Not Allowed`.

Implementei validações, tratamento de registros inexistentes e testes das respostas da API.

### 7. Tela de Gestão e Atualização de Dados

Desenvolvi uma área de gestão no Angular para administrar os projetos.

A tela permite:
- adicionar projetos;
- editar projetos;
- excluir projetos;
- visualizar projetos cadastrados;
- validar os campos;
- confirmar antes de excluir;
- utilizar o `ProjetoService` para realizar requisições.

Também implementei atualização da lista sem precisar recarregar a página com F5, utilizando atualização do array local e `filter()` para remover projetos após a exclusão.

Compreendi a diferença entre atualizar os dados localmente e buscar novamente as informações na API.

### 8. CORS e Comunicação HTTP

Trabalhei com CORS e compreendi o funcionamento do método `OPTIONS` e das requisições de pré-voo (preflight).

Também utilizei:
- cabeçalhos HTTP;
- métodos HTTP;
- requisições entre origens diferentes;
- respostas do servidor;
- códigos de status;
- análise das requisições pela aba Network do DevTools.

### 9. API com Node.js e Express

Desenvolvi uma segunda versão da API utilizando JavaScript, Node.js e Express, mantendo o contrato da API anterior.

Trabalhei com:
- Node.js;
- Express;
- JavaScript;
- npm;
- dependências e `package.json`;
- rotas;
- middleware;
- integração com MariaDB;
- operações CRUD;
- respostas JSON;
- métodos HTTP;
- testes com `curl`.

Implementei rotas para projetos e tecnologias, incluindo consultas por ID e operações de criação, alteração e exclusão.

### 10. Autenticação e Segurança

Implementei autenticação utilizando JWT para proteger as operações que modificam os dados e as rotas de acesso restrito.

Trabalhei com:
- rota de login;
- JWT (JSON Web Token);
- geração de tokens;
- `jwt.sign()`;
- `jwt.verify()`;
- middleware `autenticar`;
- cabeçalho `Authorization`;
- formato `Bearer`;
- validação de credenciais;
- bcrypt;
- hash de senhas;
- `bcrypt.hash()`;
- `bcrypt.compare()`;
- expiração de token;
- validade de três horas;
- respostas `401 Unauthorized`;
- respostas para token ausente, inválido ou expirado;
- proteção de rotas;
- resposta única para email ou senha inválidos.

Também testei o acesso com token válido, sem token e com token inválido.

### 11. Desenvolvimento com React e Vite

Iniciei uma nova versão do frontend utilizando React e Vite.

Trabalhei com:
- React;
- JSX;
- componentes;
- importação e exportação de componentes;
- propriedades (props);
- renderização de listas com `map()`;
- renderização condicional;
- gerenciamento de estado com `useState`;
- organização dos projetos em arquivos separados;
- formulários;
- componentes reutilizáveis;
- execução do ambiente com `npm run dev`.

Também compreendi a separação entre os componentes e os dados utilizados para exibir os projetos.

### 12. Testes, Depuração e Validação

Realizei testes para verificar o funcionamento das aplicações e APIs.

Utilizei:
- `curl`;
- DevTools;
- aba Network;
- testes de métodos HTTP;
- análise de códigos de status;
- verificação de respostas JSON;
- testes de autenticação;
- testes de rotas protegidas;
- validação de dados;
- identificação e correção de erros.

### 13. Git, GitHub e Ambiente de Desenvolvimento

Também trabalhei com ferramentas de organização, execução e publicação do projeto.

Utilizei:
- Git;
- GitHub;
- GitHub Codespaces;
- Git clone;
- `git push`;
- `.gitignore`;
- `node_modules`;
- `dist`;
- `.angular`;
- `package.json`;
- `package-lock.json`;
- npm install;
- Port Forwarding;
- servidores locais;
- organização de pastas e arquivos;
- documentação em Markdown;
- registro de versões do Node.js, npm e Angular CLI.

### 14. Responsividade, Acessibilidade e Experiência do Usuário

Durante o desenvolvimento, também considerei:
- responsividade;
- acessibilidade;
- navegação pelo teclado;
- labels associados aos campos;
- mensagens de erro em texto;
- estados de carregamento;
- tratamento de listas vazias;
- confirmação antes de excluir;
- atualização da interface;
- organização visual;
- experiência de navegação.

### Justificativa Final

Considero que alcancei o conceito **A — Plena**, pois consegui aplicar os conteúdos estudados em diferentes tecnologias e etapas do desenvolvimento web. Desenvolvi interfaces, componentes, formulários, APIs, operações CRUD, integração com banco de dados, autenticação e testes.

Além de implementar as funcionalidades, procurei compreender a responsabilidade de cada parte do sistema, a comunicação entre frontend e backend, a segurança das rotas e a importância da organização e documentação do código.

O projeto permitiu consolidar conhecimentos de desenvolvimento frontend e backend, banco de dados, integração de sistemas, segurança, testes e versionamento, demonstrando minha evolução durante as atividades.

# ▶️ Executando a API

Para iniciar a API, abra o terminal na raiz do projeto e execute o comando:

```bash
/usr/bin/php -S 0.0.0.0:8000
```

Em seguida, vá até a aba **Ports** do GitHub Codespaces e clique no ícone de **mundo** para abrir o servidor no navegador.

Antes de acessar os endpoints, o endereço do servidor será semelhante a:

```text
https://obscure-halibut-4j4rwrrvwvvqc75vg-8000.app.github.dev
```

Para visualizar as APIs, adicione os respectivos caminhos ao final da URL.

### API de Projetos

```text
https://obscure-halibut-4j4rwrrvwvvqc75vg-8000.app.github.dev/api/projetos.php
```

### API de Tecnologias

```text
https://obscure-halibut-4j4rwrrvwvvqc75vg-8000.app.github.dev/api/tecnologias.php
```

> **Observação:** o nome do domínio pode variar de acordo com cada sessão do GitHub Codespaces. Basta utilizar a URL fornecida pelo servidor e acrescentar `/api/projetos.php` ou `/api/tecnologias.php` ao final.

---

# ▶️ Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
```

### 2. Acessar a pasta do projeto

```bash
cd portfolioAngular
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar a aplicação

```bash
ng serve
```

### 5. Abrir no navegador

```text
http://localhost:4200
```

---

# 🔄 Ambiente Reproduzível

Registrar as versões utilizadas é importante para garantir que outras pessoas consigam executar o projeto nas mesmas condições.

Preencha com as versões obtidas pelos comandos abaixo:

### Node.js

```bash
node -v
```

Versão utilizada:

```text
v24.14.0
```

### npm

```bash
npm -v
```

Versão utilizada:

```text
11.9.0
```

### Angular CLI

```bash
ng version
```

Versão utilizada:

```text
Angular CLI: 21.2.14
```

---

# 👨‍💻 Autor

Projeto desenvolvido como atividade prática de aprendizagem do framework Angular, explorando conceitos de SPA, componentes, Angular Router, `routerLink`, `routerLinkActive`, Angular CLI, Node.js, npm e Angular Material.

**Autora:** Rafaela Cardoso.