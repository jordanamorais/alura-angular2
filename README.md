
# My useful notes about Angular 2.

* [Part 1](https://github.com/jordanamorais/alura-angular2/tree/master/module-I)
* Part 2

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
* Instalar dependencias da pasta client/, lendo o package.json e baixando somente as que estão faltando:

```javascript
npm install
```

### Server start

* Dentro da pasta server/ executar:

```javascript
npm start
```

* Acesso: http://localhost:3000

### Compilar/Transpilar

* Dentro da pasta client/, para compilar em tempo real, rodar também um:

```javascript
npm start
```
    * Este comando executa o script start definido no arquivo alurapic/client/package.json.
    * A propriedade "scripts" define todos os scripts que podemos chamar.
    * o npm start é um atalho para _npm run tsc:w_ que compila o TypeScript e segue dando watch no projeto, escutando mudanças nos arquivos .tsc e gerando/transpilando os .js.

### Terminal

* Rename folder reminder:

```javascript
mv folder new_folder_name
```