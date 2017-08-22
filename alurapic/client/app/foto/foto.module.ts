import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component'

// Nao precisa importar o Browser porque já esta importado no Module Principal (App Module)
@NgModule({
    declarations: [ FotoComponent ], // Tudo o que faz parte do Module
    exports: [ FotoComponent] // Tudo o que eu quero exportar deste module para ser reusado
})

export class FotoModule {

}