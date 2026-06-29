# Portfólio Angular

## 📖 Descrição do Projeto

Este projeto foi desenvolvido utilizando o framework Angular como parte das atividades do 2º trimestre. O objetivo é criar uma aplicação web moderna seguindo o conceito de **SPA (Single Page Application)**, onde a navegação acontece sem recarregar a página inteira, proporcionando uma experiência mais fluida ao usuário.

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

### app.ts

Responsável pela lógica da aplicação.

### app.html

Responsável pela interface exibida ao usuário.

A comunicação entre lógica e interface ocorre por meio da **interpolação**:

```html
{{ title() }}
```

Neste projeto, `title` é um **signal**, recurso moderno do Angular utilizado para armazenar valores reativos.

---

## 🌐 Funcionamento do ng serve

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

## 📦 Dependências e node_modules

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

- **home/** → página inicial;
- **sobre/** → informações pessoais e trajetória acadêmica;
- **projetos/** → projetos desenvolvidos;
- **contato/** → formas de contato.

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

## Por que o acesso de dados no service e não no componente?

```text
O acesso aos dados foi implementado nos services, e não diretamente nos componentes, seguindo as boas práticas do Angular.

Essa abordagem separa as responsabilidades da aplicação: os componentes ficam responsáveis apenas pela interface e pela interação com o usuário, enquanto os services concentram toda a lógica de comunicação com a API.
```
## Autoavaliação

**Conceito pretendido:** **A**

**Justificativa (cite o arquivo de cada critério):**
- **Consumo da API (Projetos):** `projeto.service.ts` (requisição HTTP GET) e `projetos.ts` (consumo dos dados).
- **Consumo da API (Catálogo):** `tecnologia.service.ts` (requisição HTTP GET) e `catalogo.ts`/`catalogo.html` (exibição das tecnologias utilizando `async` pipe).
- **Botão "Ver no GitHub":** `projetos.html` utilizando property binding com `[href]="p.link_github"`.
- **Tratamento de erro:** `projetos.ts` e `catalogo.ts`.
- **Tratamento de lista vazia ("nenhum item ainda"):** `projetos.html` e `catalogo.html`.
- **URL centralizada:** `api.ts`, utilizada pelos arquivos `projeto.service.ts` e `tecnologia.service.ts`.
- **Boas práticas:** toda a comunicação com a API foi implementada nos services, enquanto os componentes ficaram responsáveis apenas pela apresentação dos dados.
- **Uso do `async` pipe:** `catalogo.html`, consumindo os dados sem utilizar `subscribe()`.

## ▶️ Executando a API

Para iniciar a API, abra o terminal na raiz do projeto e execute o comando:

```bash
/usr/bin/php -S 0.0.0.0:8000
```

Em seguida, vá até a aba **Ports** do GitHub Codespaces e clique no ícone de **mundo** para abrir o servidor no navegador.

Antes de acessar os endpoints, o endereço do servidor será semelhante a:

```text
https://obscure-halibut-4j4rwrrvwvvqc75vg-8000.app.github.dev
```

Para visualizar as APIs, adicione os respectivos caminhos ao final da URL:

### API de Projetos

```text
https://obscure-halibut-4j4rwrrvwvvqc75vg-8000.app.github.dev/api/projetos.php
```

### API de Tecnologias

```text
https://obscure-halibut-4j4rwrrvwvvqc75vg-8000.app.github.dev/api/tecnologias.php
```

> **Observação:** o nome do domínio pode variar de acordo com cada sessão do GitHub Codespaces. Basta utilizar a URL fornecida pelo servidor e acrescentar `/api/projetos.php` ou `/api/tecnologias.php` ao final.


## ▶️ Como Executar o Projeto

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

## 🔄 Ambiente Reproduzível

Registrar as versões utilizadas é importante para garantir que outras pessoas consigam executar o projeto nas mesmas condições.

Preencha com as versões obtidas pelos comandos abaixo:

### Node.js

```bash
node -v
```

Versão utilizada:

```text
vXX.XX.X
```

### npm

```bash
npm -v
```

Versão utilizada:

```text
X.XX.X
```

### Angular CLI

```bash
ng version
```

Versão utilizada:

```text
Angular CLI: XX.X.X
```

---

## 👨‍💻 Autor

Projeto desenvolvido como atividade prática de aprendizagem do framework Angular, explorando conceitos de SPA, componentes, Angular Router, `routerLink`, `routerLinkActive`, Angular CLI, Node.js, npm e Angular Material.

**Autora:** Rafaela Cardoso.