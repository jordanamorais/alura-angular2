import { Component, Input, OnInit } from '@angular/core'; 

@Component({
    moduleId: module.id, // pra conseguir usar a pasta relativa.
    selector: 'painel',
    templateUrl: './painel.component.html'
})

export class PainelComponent implements OnInit {

    // permite esse parametro estar disponivel no componente
    // Inbound Property
    // O angular so passa esse valor depois que o construtor é chamado
    @Input() titulo: string; // a tipagem é opcional. Tipa se quiser.

    // O que esta definido no Inbound Property nao pode ser acessado no constructor pois ele
    // é executado antes. É preciso, por isso, utilizar o ngOnInit para tal.
    constructor() {}

    // Executado imediatamente após o Inbound Property
    ngOnInit() {
        this.titulo = this.titulo.length > 7  
            ? this.titulo.substr(0,7) + "..."
            : this.titulo;
    }
}