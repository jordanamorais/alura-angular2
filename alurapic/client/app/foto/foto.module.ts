import { FilterByTitle } from './fotos.pipes';
import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component'

// Nao precisa importar o Browser porque já esta importado no Module Principal (App Module)
@NgModule({
    declarations: [ FotoComponent, FilterByTitle ], // Tudo o que faz parte do Module
    exports: [ FotoComponent, FilterByTitle ] // Tudo o que eu quero exportar deste module para ser reusado por outros
})

export class FotoModule {

}