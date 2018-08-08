# Angular (2.X - 6.X) - Notes

## Sobre APIs REST

* API REST - Retorna os dados no formato JSON. O padrão REST utiliza o protocolo HTTP. 
* Desse modo, a aplicacão web, assim como apps nativos, apenas se preocuparão com a interface do usuário, que será construída com base nos dados recebidos.

## Sobre Views e SPAs

* De forma simples, view é a tela do usuário com base nos dados recebidos.
* SPAs (Single Page Application) - A mudança da página será feita via JavaScript com base nas ações do usuário e nos dados recebidos da API REST. Sempre será `index.html` a ser exibida, mas seu conteúdo será alterado dinâmicamente através de JavaScript.

## Angular

* Angular nos permite criar componentes reutilizáveis que encapsulam sua apresentação e comportamento.
* A media que fomos criando nossos componentes, o tempo para desenvolver novos recursos ficará cada vez menor, pois poderemos combinar esses componentes entre si para criar novos funcionalidades.
* A versão 6 do Angular continua a usar Typescript. TypeScript existe apenas em tempo de desenvolvimento, pois antes do nosso código entrar em produção, ela é traduzida para JavaScript puro.
* Suportará sempre as duas últimas versões vigentes dos navegadores do mercado (ever green browsers).
* Em Angular, tudo é um componente, que tem a vantagem de guardar um comportamento (o que deve fazer), a apresentação (o CSS), e a markup (estrutura), tudo num único lugar.
* O Angular 2.x em diante usa o Webpack como bundle module, tudo encapsulado pelo Angular CLI.

> Data Binding no Angular 6.x

```angular
<img [src]="url" [alt]="description">
```

### Sobre as diferentes versões do Angular

* A primeira versão do Angular (1) foi chamada de AngularJS.
* A partir da versão 2.x, convencionou-se chamar apenas de Angular. Houve uma grande mudança de tecnologia entre as versões 1 (AngularJS) e 2.x em diante.

## Angular CLI

* Facilita configurar o projeto, compilador, build automático, minificar, concatenar, etc. Desse modo, acaba por facilitar o dev focar na criação dos componentes.
* Ou seja, facilita toda a configuração de Infra Estrutura para que o desenvolvedor ganhe tempo o que de fato interessa.
* Qualquer atualização na aplicação o browser é recarregado (Como BrowserSync que o cli engloba).

### Comandos

> Instalar Angular CLI

```bash
npm i -g @angular/cli
```

> Instalar Angular CLI com versão específica

```bash
npm i -g @angular/cli@6.0.7
```

> Ver versão instalada

```bash
ng --version
```

> Criar projeto

```bash
ng new nomedoprojeto
```

> Criar projeto numa pasta existente

```bash
ng new appName --directory ./
```

> Dentro da pasta do projeto, startar o projeto

```bash
ng serve
```

> Startar o projeto e abrir automaticamente a aplicação no browser, num servidor local

```bash
ng serve --open
```

## Nomenclaturas

* {{...}} - Double curly braces. AE / Angular expression.
* Data Binding - Associação de dados com uma fonte de dados e seu template (view). A ideia do Angular com data-binding é justamente evitar muita manipulação de DOM para coisas simples.

