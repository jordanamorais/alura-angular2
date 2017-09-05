
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
* Provider = Provedor de artefatos.
* Cada view ou página pode ser considerada como component file no Angular.
* Só eventos assíncronos disparam pro Angular que a sua tela precisa ser renderizada.
    * É preciso usar um evento/data binding da view para o seu modelo, como por exemplo, um (keyup)='0' suficiente pro angular renderizar novamente a tela.
* Binding = Associação.
* Forma de utilizar eventos no Angular, dentro de uma tag: (event)

## ES6 Tips

* Arrow Functions resolve o problema de contexto de _this_.

## About APIs

* Uma API criada no back-end poderá ser consumida pelos dois tipos de aplicação (web e aplicativo de celular, por exemplo). Dessa forma, qualquer alteração que fizermos na API refletirá para os dois.
* Uma *API REST* que usa o protocolo HTTP. Como HTTP é a web, tanto o browser quando a aplicação nativa em Android saberão consumir essa API para buscar, armazenar e enviar dados, inclusive executar regras de negócio. Dessa maneira, deixaremos tanto a aplicacão web quanto a nativa em android apenas se preocupando com a interface do usuário. Seja lá quem for consumir essa API, basta usar o protocolo HTTP que dá tudo certo.

## SPA

* Aplicação web que não recarrega durante seu uso.
* Se utiliza de rotas e Ajax, propondo mais rapidez de feedback e melhoria de performance e UX.

## Typescript

* Linguagem estaticamente tipada.
* Um superset do ES2015 (ES6), com recursos extras como tipagem estática e decorators.
* É necessário ter o NodeJs instalado.
* No Windows e no MAC a compilação ocorre imediatamente após a criação do arquivo .ts.
* TypeScript possui um transpiler, que é um compilador de código fonte para código fonte. Com ele, podemos programar usando o que há de mais moderno do ES6 e do TypeScript. 
    * O transpiler traduz para ES5 para compatibilidade com todos os browsers.

* Ao compilar o projeto com o _npm start_ o arquivo app.meu-component.js e js.map serão criados, após a transpilação.
    * Ele ficará escutando mudanças nos arquivos e gerar uma nova compilação em tempo real.

* Suporta a noção de Interface (Obrigações que uma classe que implementa essa interface tem que cumprir).
    * Blinda o programador de erros.
    * É exclusivo no Typescript, portanto, não existe no ES6.
    * Qualquer erro irá ser exibido no terminal.


## Components and Decorators

* Acrescentado pelo TypeScript ao ES6.
* Para transformar uma classe ES6 em Component, é preciso importar um Decorator antes da definição da Class e definir os objetos mínimos do Component: o _selector_ e o _templateUrl_.
* Para o angular, o decorator é:

```javascript
    import {} from '@angular/core'
```
    Ele irá procurar o decorator dentro da pasta do angular, no node_modules.

    Logo após o import do decorator, criar de fato o componente com suas propriedades. O @Component lembra uma Annotation do Java:

```javascript
    @Component({
        moduleId: module.id, // Faz com que o componente procure o template relativo à sua pasta.
        selector: 'nome-do-componente', // Será a maneira como acessar o componente na view. Como uma tag html.
        templateUrl: './app/app.component.html', // Template do Componente. Por convenção, para pegar a pasta raiz usa-se ./
    })
```

## Arquivos .map

* Fazem a correlação entre os arquivo .ts e .js (transpilado) para caso haja um erro no transpilado, você saber qual a linha correspondente a este erro no .ts, resolvendo problemas de depuração.

## Modules

* Todo module de ES6, se quiser importá-lo em algum lugar, é preciso exportar, ou seja, acrescetar um *export* antes da definição da class.
* Para um module do Angular, é preciso importar o _NgModule_ e declarar o _@NgModule_:

```javascript
import { NgModule } from '@angular/core';
// Indica que a aplicacao Angular vai rodar no Navegador
import { BrowserModule } from '@angular/platform-browser'; // obrigatorio
import { MyComponent } from './app.mycomponent'; // dará erro se nao utilizar export antes da class MyComponent

// Transforma sua classe num module do Angular
@NgModule({
    // Passa um array com todos os modules que eu quero importar
    imports: [ BrowseModule],
    // Declarar quais ou outros componentes ou recursos que ele tem
    declarations: [ MyComponent ],

    // Na hora de bootar a aplicaçao, quem vai bootar primeiro?
    // Se eu tiver mais de um componente, qual componente vou querer iniciar?
    bootstrap: [ MyComponent]
})

* Para cada module importado, acrescentar o nome do module no _imports_ do decorator @NgModule.

```
* É necessário criar pelo menos um módulo para que nossa aplicação funcione, geralmente chamado de módulo raíz (root) ou módulo principal (main) da aplicação.

## Loaders

* System.js, foi o loader (carregador) escolhido pela equipe do Angular 2.
* A vantagem do loader é que não precisamos importar cada módulo em nossa página, simplesmente indicamos qual é o primeiro módulo a ser carregado que todas as suas dependências serão carregadas.
* O _System.js_ lê o *main.js* para saber quais e como os modulos devem ser carregados pelo navegador.
    * Evitar importar n arquivos.js
    * O proprio loader resolve as dependencias e baixa o script pra você.

## Angular Cli

* Ferramenta de linha de comando que ajuda a montar a infra da sua aplicação e acelerar a criação de componentes.

## Inbound Properties and One Way Data Binding

* Faz o component passar a aceitar valores. Ex.:

```javascript
export class PhotoComponent {

    // Inbound Properties do TypeScript. Se fosse ES6 criaria o constructor.
    // Meu component passará a aceitar valores
    @Input() url; 
    @Input() title;
}
```
* Entre []: Associação Unidirecional (somente leitura). Ex.:

Angular2
```html
<img class="img-responsive center-block" [src]="url" [alt]="title">
```

Usando Angular Expression ({{}}) (do Angular 1)
```html
<img class="img-responsive center-block" src="{{url}}" alt="{{title}}">
```

## Syntatic Sugar

* TypeScript nos traz alguns açúcares sintáticos para escrevermos menos. Ex:

```javascript
class Pessoa {
    // Nao precisar escrever constructor() { this.nome; ...}
    nome;
    endereco;
}
```

## Server Requests / Ajax

* No JS usa-se Ajax para requisições.
* O Angular possui um serviço já responsável por realizar esta tarefa.
* O HTTP trabalha somente com texto, portanto tem que converter de Object para texto/json.
* Angular 1 usa muito *Promises*. Angular 2 preferiu utilizar *RxJS* para trabalhar com Observable stream.

```javascript
// Sabe fazer requisições Ajax para consumir dados de uma API
// O Http é uma classe, logo precisa-se de uma instância para tal
import { Http } from '@angular/http';
```
    * É preciso importar o Inject do angular core.
    * Usa o _@Inject(Http) http_ como parametro no constructor para que o Angular fique responsável pela requisição.
    * Importa o module Http no app.module.ts para que não haja erro do provider.
    
    ```javascript
    import { HttpModule } from '@angular/http';
    ```
    Ele disponibilizará um provider já configurado para disponibilizar a instância já configurada de HTTP.

### Usando com Typescript
* Remove o Inject do app.component
* No parâmetro do constructor, em vez de passar _@Inject(Http) http_ passa-se _http: Http_. Ex.:

```typescript
export class AppComponent {

    constructor(http: Http) {
        
        // o Http request retorna um "stream"
        let stream = http.get('v1/fotos'); // link para o consumo dos dados.

        // Para ter acesso aos dados retornados do stream, com uma funcao que irá receber a resposta dada pelo backend
        //stream.subscribe(function(res){
        //});

        // Utilizando arrow function:
        stream.subscribe(res => {

            this.fotos = res.json(); // retorna os dados da resposta num json.
        }, erro => console.log(erro))); // Se nao der sucesso, retorne um erro.
    }
}
```

### Enxugando o código

```typescript
export class AppComponent {

    constructor(http: Http) {
        
        // Encadeando
        // Para utilizar o .map, precisa importar o module do map do rxJS no app.module.
        // import 'rxjs/add/operator/map';
        http
        .get('v1/fotos')
        .map(res => res.json())
        .subscribe(res => {
            this.fotos = res;
        }, erro => console.log(erro)));
    }
}
```

### post()
* Comportamento semelhante ao get, para obter dados.
* O post é muito usado quando queremos incluir dados.
* Exemplo de uso do post para submeter dados de um cadastro, no método _cadastrar_ da class _CadastroComponent_ do _cadastro.component.ts_

* Exemplos de definição de tipos com TypeScript:

```typescript
nome: string;
foto: Array<Object> = []; // array inicializado vazio.
foto: Object[] = []; // Mesmo de acima, só que um pouco mais resumido.
```

## Directive ngFor

* Diretiva para iterar na view. Ex.:

```html
<foto *ngFor="let foto of fotos" url="{{foto.url}}" title="{{foto.title}}"></foto>
```

## <ng-content>

* Indica onde na template do component o conteúdo passado dentro do component deverá ser exibido.

## SPA

* Geralmente já carrega todos os scripts e CSS's de que precisa no seu primeiro carregamento.
* Chavear páginas através de rotas, no angular, sem recarregar as páginas.
* Criar o arquivo de config de rotas do Angular:

```typescript
    // Onde importará o module de Routes e setará os componentes para as páginas
    app/app.routes.ts
``` 
* Importar o module de routing no _app.module.ts_.
* Inserir no index.html:

```html
<base href="/">
```

* Inserir diretiva _<router-outlet></router-outlet>_ no app.component para indicar que todos os conteúdos dos componentes importados serão exibidos ali.
    * Indica o local em que os componentes carregados pelo sistema de rotas do Angular devem ser inseridos dentro de um template.
    * Normalmente é inserido no o primeiro componente a ser carregado em nossa aplicação.

* Utilizar _[routerLink]="['/cadastro']"_ no lugar do _href_ de um link para indicar a url de uma rota, para que não precise recarregar a aplicação por inteiro, fazendo a troca de maneira correta da rota.


## Pipes

* Funcionam como filtros no Angular. Ex.: {{foto.titulo *| uppercase* }} transforma o valor para caixa-alta.
* É possível criar filtros customizados.
    * Por convenção, criar o arquivo no padrão: _myfile.pipes.ts_
* Para implementar a classe do novo pipe, é obrigatório o método *transform* na classe e importar o PipeTransform (Interface/Contrato) no Decorator.

### Variável local de template

Uma variável local de um template é uma maneira de movermos dados entre elementos. Pode ser criada com duas sintaxes.Ex.:

```html
<input class="form-control" #textoProcurado  placeholder="filtrar pelo título da foto">
<!--ou, declarando a variavel como var- -->
<input class="form-control" var-textoProcurado  placeholder="filtrar pelo título da foto">
``` 

## One Way Data Binding

### Do model pra view
* O dado sempre flui do modelo para a view e não o contrário.
* Utilizado angular expression *{{ url }}* ou colchetes *[src]="url"* nas tags.

### Da view pro model
* O Angular também possui um data binding da view pro modelo.
* Diretiva entre parentesis que indica o tipo de evento e a função que será executada por ele. Ex.:

```html
<!-- O $event é para evitar o recarregamento da pagina ao dar o submit -->
<!-- Dentro da class, recebe "event" como parâmetro e seta event.preventDefault(); -->
<form (submit)="cadastrar($event)"></form>
```

* Passar dado inputado da view pro model:

```html
<input (input)="foto.titulo = $event.target.value"  [value]="foto.titulo" class="form-control" autocomplete="off">
```

## ngModel

* () = da view pro modelo. Event binding.
* [] = do modelo pra view. Data binding.
* [(ngModel)] = passa da view pro modelo e também do modelo pra view, por isso Two Way Data Binding (combinando dois tipos de binding, o de evento e o de dados).
* O uso de ngModel torna menos verbosa a escrita do Angular.
* ngModel só estará disponível se utilizar um import específico do Angular
* É preciso também setar um _name_ pro seu atributo html para que o _ngModel_ funcione.

Ex. de uso:

```html
<input name="titulo" [(ngModel)]]="foto.titulo" class="form-control" autocomplete="off">
```

## Component Life Cicle

* O método _ngOnInit()_ é executado logo após a definição de uma Inbound Property _@Input... etc_.
* Importar no Angular core a interface _OnInit_ e acrescentar o implements na classe para garantir a implementaçao correta do OnInit.

## Validation

### Template Oriented

* O Angular tem o próprio sistema de validação.
* Declarar variável de template no form como form do Angular: <form #meuForm="ngForm"...
* Diretiva *ngIf="titulo.invalid" numa tag.
* Setar button como disabled, caso o form seja invalido. Ex.:

```html
<button type="submit" class="btn btn-primary" [disabled]="meuForm.form.invalid">
    Salvar
</button>
```

### Model Oriented

* No _app.module.ts_, juntamente com o FormsModule, importar o *ReactiveFormsModule*.
* Importar também no  imports: do @NgModule.
* Importar o _FormGroup_, do _@angular/forms_ no seu component.
* No _<form>_ usa a diretiva *[formGroup]="meuForm"*.
    * Pra definir um formGroup, é preciso importar o _FormBuilder_ junto com o import do FormGroup no component, para construir formulários.
* No constructor do component, criar uma injeção de dependência do FormBuilder para receber o JSON de configuração.
    * Ex.: Ver constructor do arquivo _cadastro.component.ts_.
* Utilizar o *formControlName=""* para associar o campo que deve ser validado dentro do Form.
* Importar o *Validators*, onde importa o _FormGroup_ para conseguir efetuar as validações predefinidas.
* Dentro das configurações do JSON, do FormBuilder, no [], passa os settings do Validators.
* Nas tag das mensagens de campo obrigatório que devem ser exibidas, passar o **ngIf* controlando o campo se ele for inváido, por exemplo: _*ngIf="meuForm.controls.titulo.invalid"_.


### Validators Types

* _Required_ -- quando o campo é requerido
* _Compose([])_ -- método que retorna um array. Ex:

```javascript
// minLength recebendo a quantidade mínima de caracteres
Validators.compose([Validators.required, Validators.minLength(4)])
```