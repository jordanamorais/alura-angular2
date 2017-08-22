
# Angular 2 - Part 1 - Useful notes

* Rompe totalmente com a versão 1 (AngularJS), com mudanças de paradigma.
* Framework de SPA.
* Possui módulos que podem nos ajudar com rotas da aplicação no lado do cliente, e esconder toda essa complexidade com requisições Ajax.
* ES6 com TypeScript para um código menos verboso.
* O Angular para funcionar precisa de um servidor web (Ex.: um servidor web com NodeJS).
* Uma aplicação em angular é feita para consumir APIs/Serviços e o mesmo serviço que será disponibilizado também possuirá as APIs que serão consumidas.
* Sobre o VSCode e Typescript:
    * Usando o VSCode, a integração com TypeScript é realizada sem qualquer esforço e sem configurações adicionais.
* No site do Angular, já há o start dos arquivos de pré-requisito para funcionar _package.json_ ,_tsconfig.json_, _typings.json_, _systemjs.config.js_ , necessários para a pasta client/.
* O Angular depende do NodeJS para desenvolvimento.
* O _package.json_ possui todas as dependências que o projeto precisa para funcionar. Quem verifica e atualiza as dependências é o instalador de pacotes do NodeJS: o NPM, jogando os arquivos baixados no dir node_modules/.
* Boa prática: criar a pasta *app/* e tudo do angular ficar dentro dela.
* Angular gira em torno de componentes.

## About APIs

* Uma API criada no back-end poderá ser consumida pelos dois tipos de aplicação (web e aplicativo de celular, por exemplo). Dessa forma, qualquer alteração que fizermos na API refletirá para os dois.
* Uma *API REST* que usa o protocolo HTTP. Como HTTP é a web, tanto o browser quando a aplicação nativa em Android saberão consumir essa API para buscar, armazenar e enviar dados, inclusive executar regras de negócio. Dessa maneira, deixaremos tanto a aplicacão web quanto a nativa em android apenas se preocupando com a interface do usuário. Seja lá quem for consumir essa API, basta usar o protocolo HTTP que dá tudo certo.

## SPA

* Aplicação web que não recarrega durante seu uso.
* Se utiliza de rotas e Ajax, propondo mais rapidez de feedback e melhoria de performance e UX.

## Typescript

* Um superset do ES2015 (ES6), com recursos extras como tipagem estática e decorators.
* No Windows e no MAC a compilação ocorre imediatamente após a criação do arquivo .ts.
* TypeScript possui um transpiler, que é um compilador de código fonte para código fonte. Com ele, podemos programar usando o que há de mais moderno do ES6 e do TypeScript. 

## Components and Decorators

* Para transformar uma classe ES6 em Component, é preciso importar um Decorator antes da definição da Class.
* Para o angular, o decorator é:

```javascript
    import {} from '@angular/core'
```
    Ele irá procurar o decorator dentro da pasta do angular, no node_modules.

    Logo após o import do decorator, criar de fato o componente com suas propriedades. O @Component lembra uma Annotation do Java:

```javascript
    @Component({
        selector: 'nome-do-componente', // Será a maneira como acessar o componente na view. Como uma tag html.
        templateUrl: './app/app.component.html', // Template do Componente. Por convenção, para pegar a pasta raiz usa-se ./
    })
```