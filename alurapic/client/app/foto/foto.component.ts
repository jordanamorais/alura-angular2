import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id, // Para evitar usar paths longos e estaticos na templateUrl. O Angular entende que vai pegar dentro da mesma pasta
    selector: 'foto',
    templateUrl: './foto.component.html'
})

export class FotoComponent {

    // Inbound Properties do TypeScript. Se fosse ES6 criaria o constructor.
    // Meu component passará a aceitar valores
    @Input() url: string; // tipando para os metodos para string ficarem disponiveis
    @Input() titulo: string;
    descricao: string; // Nao tem o @Input porque eu só aceito receber de fora (pelo componente html) a url e o titulo
}