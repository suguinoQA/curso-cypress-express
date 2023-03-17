# Curso Cypress Express - QA Experience

Projeto de automação criado durante realização do curso de cypress express.

## Pré-Requisitos

- Cypress@12.2.0
- Node.js

## Ambiente

https://play.qaxperience.com/87627-cypress-express/2105199-descendo-para-o-playground/downloads/1948571

## Instalação

- Instalação do Cypress:
  
  - Comandos com yarn:

    - yarn init
    - yarn remove cypress
    - yarn add cypress@12.2.0 -D
    - yarn cypress open

  - Comandos com npm:

    - npm init
    - npm uninstall cypress
    - npm i cypress@12.2.0 --save-dev
    - npx cypress open

- Rodar projeto (api + web):

  - Comandos com yarn:

    - yarn install
    - yarn db:init
    - yarn dev

  - Comandos com npm:

    - npm install
    - npm run db:init
    - npm run dev

## Tests

- Abrir Cypress:
  - npm:
    - npx cypress open
  - yarn:
    - yarn run cypress open
  - headless mode:
    - npx cypress run
