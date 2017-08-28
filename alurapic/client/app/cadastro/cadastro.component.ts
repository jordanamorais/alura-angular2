import { Component, Input } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})

// Como o cadstro é algo especifico do produto 
// ( e nao sera reutilizado em outros lugares como as fotos, vou chamar apenas no module principal)
export class CadastroComponent {

}