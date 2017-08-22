import { selector } from 'rxjs/operator/publish';
// Decorator - Processado pelo TypeScript
// ---
import { Component } from '@angular/core';

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


}