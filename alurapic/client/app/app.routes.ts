// Importando o router module e o router
import { RouterModule, Routes } from '@angular/router';

// Quem eu quero exibir
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

// Tem que ser um array
const appRoutes: Routes = [

    // Configurar as rotas
    // ---

    // ListagemComponent será a página inicial. path '' significa localhost:3000 por exemplo.
    { path: '', component: ListagemComponent },

    // localhost:3000/cadastro
    { path: 'cadastro', component: CadastroComponent },

    // Prevenir que ao digitar uma url inválida ele dê erro.
    // Quem irá carregar quando a url for inválida
    // Qualquer coisa que nao cair em uma url válida, irá carregar ListagemComponent
    { path: '**', component: ListagemComponent }
];

// Artefato que ele está exportando.
// É a compilação das minhas rotas.
export const routing = RouterModule.forRoot(appRoutes);
