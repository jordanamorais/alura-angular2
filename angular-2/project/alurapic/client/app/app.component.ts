

// Decorator - Processado pelo TypeScript
// ---
// Só com Typescript, usando a tipagem, nao precisa importar o Inject.
import { Component } from '@angular/core'; // Component, Para criar um Componente, Injector para requisições
import { selector } from 'rxjs/operator/publish'; 
import { Http } from '@angular/http'; // Para ter acesso a requisições de serviço

@Component({
    moduleId: module.id, // Faz com que o componente procure o template relativo à sua pasta.
    selector: 'app',
    templateUrl:  './app.component.html'
})

// Classes ES6
// ---
// Para a class ser um Component, é preciso importar o decorator
// é preciso o export pra dizer que é um modulo exportavel no ES6
export class AppComponent {

}