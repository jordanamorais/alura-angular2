// Criar o module do Angular
//---

import { NgModule } from '@angular/core';
// Indica que a aplicacao Angular vai rodar no Navegador
import { BrowserModule } from '@angular/platform-browser'; // obrigatorio
import { AppComponent } from './app.component'; // dará erro se nao utilizar export antes da class AppComponent
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component'; // Será uma nova página
import { ListagemComponent } from './listagem/listagem.component'; // Será uma nova página
import { routing } from './app.routes';

// Carregar o o module .map do rxjs para ficar disponível pra uso.
import 'rxjs/add/operator/map';

// Transforma sua classe num module do Angular
@NgModule({
    // Passa um array com todos os modules que eu quero importar
    // Como a aplicação vai rodar no Browser, preciso importar o BrowserModule
    imports: [ 
        BrowserModule,
        FotoModule,
        HttpModule,
        PainelModule,
        routing // routes module
    ],
    
    // Declarar quais ou outros componentes ou recursos que ele tem
    declarations: [ AppComponent, CadastroComponent, ListagemComponent ],

    // Na hora de bootar a aplicaçao, quem vai bootar primeiro?
    // Se eu tiver mais de um componente, qual componente vou querer iniciar?
    bootstrap: [ AppComponent ] // antes era o starter. Mas é preciso definir hora cadastro ser exibido e hora listagem ser exibido 

    // Nao tem exports aqui pois o module principal da minha aplicacao ninguem precisa importar
    // Ele já é o module principal
})

export class AppModule {

}