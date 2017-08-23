

// Decorator - Processado pelo TypeScript
// ---
// Só com Typescript, usando a tipagem, nao precisa importar o Inject.
import { Component } from '@angular/core'; // Component, Para criar um Componente, Injector para requisições
import { selector } from 'rxjs/operator/publish'; 
import { Http } from '@angular/http'; // Para ter acesso a requisições de serviço

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl:  './app.component.html'
})

// Classes ES6
// ---
// Para a class ser um Component, é preciso importar o decorator
// é preciso o export pra dizer que é um modulo exportavel no ES6
export class AppComponent {

    // O Angular vai buscar o http pegando quem ele depende. Para isso precisa usar @Inject (um decorator a ser importado)
    // Pegue uma instancia do Http e passe como parametro para mim no construtor
    // constructor(@Inject(Http) http) { // Se fosse sem usar o recurso da tipagem do TypeScript
    constructor(http: Http) {
        
        // Criar uma requisição Http é preciso passar 2 parametros que o Angular faz isso via Injeção de Dependência
        // let http = new Http(); // -- Assim não funcionaria
    }

}