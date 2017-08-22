
# Angular 2 - Part 1 - Useful notes

* Rompe totalmente com a versão 1 (AngularJS), com mudanças de paradigma.
* O Angular para funcionar precisa de um servidor web (Ex.: um servidor web com NodeJS).
* Uma aplicação em angular é feita para consumir APIs/Serviços e o mesmo serviço que será disponibilizado também possuirá as APIs que serão consumidas.
* Sobre o VSCode e Typescript:
    * Usando o VSCode, a integração com TypeScript é realizada sem qualquer esforço e sem configurações adicionais.
* No site do Angular, já há o start dos arquivos _package.json_ ,_tsconfig.json_, _typings.json_, _systemjs.config.js_.


## App AluraPic

### Dependences

* Instalando Node via [homebrew](https://brew.sh/) no Mac:

```javascript
brew update
brew install node
```

### Folder Structure

* server/ -- Contém todo o código do servidor.
* client/ -- Onde ficarão todos os fontes do projeto.

### Server start

* Dentro da pasta server/ executar:

```javascript
npm start
```

* Acesso: http://localhost:3000


## Typescript

* Um superset do ES2015 (ES6), com recursos extras como tipagem estática e decorators.
* No Windows e no MAC a compilação ocorre imediatamente após a criação do arquivo .ts.
