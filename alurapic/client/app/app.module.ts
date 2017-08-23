// Criar o module do Angular
//---

import { NgModule } from '@angular/core';
// Indica que a aplicacao Angular vai rodar no Navegador
import { BrowserModule } from '@angular/platform-browser'; // obrigatorio
import { AppComponent } from './app.component'; // dará erro se nao utilizar export antes da class AppComponent
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';

// Transforma sua classe num module do Angular
@NgModule({
    // Passa um array com todos os modules que eu quero importar
    // Como a aplicação vai rodar no Browser, preciso importar o BrowserModule
    imports: [ BrowserModule, FotoModule, HttpModule ], // Porque AppModule depende de FotoModule (por isso importou ele aqui)
    
    // Declarar quais ou outros componentes ou recursos que ele tem
    declarations: [ AppComponent ],

    // Na hora de bootar a aplicaçao, quem vai bootar primeiro?
    // Se eu tiver mais de um componente, qual componente vou querer iniciar?
    bootstrap: [ AppComponent ]
})

export class AppModule {

}