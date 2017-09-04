import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { Http, Headers } from '@angular/http'; // Para ter acesso a requisições de serviço e o Headers para o ultimo param do post
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Para validaçoes via model

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})

// Como o cadstro é algo especifico do produto 
// ( e nao sera reutilizado em outros lugares como as fotos, vou chamar apenas no module principal)
export class CadastroComponent {

    // Faz com que eu enxergue os atributos disponíveis de FotoComponent.
    foto: FotoComponent = new FotoComponent();
    http: Http; // guardar para poder utilizar o http no método cadastrar
    meuForm: FormGroup; // validation via model. No <form> usa a diretiva [formGroup]="meuForm"

    // injeção de dependencia tambem do formBuilder do angular
    constructor(http: Http, fb: FormBuilder) {

        // testando inicialização
        //this.foto.titulo = 'A';
        //this.foto.url = 'B';
        //this.foto.descricao = 'C';

        this.http = http; // definido acima e que será reusado.

        // Criar um grupo de validação que recebe um jSon.
        this.meuForm = fb.group({

            titulo: ['', Validators.required], // quero validar o titulo e usar alguma regra de validação
            url: ['', Validators.required], // Dentro de um colchetes porque pode ter mais de uma validação por campo
            descricao: [''], // Não terá nenhuma validação sobre este campo, mas é preciso passar no Json de config da validacao, com []
        });
    }
    // Os dados serao enviados via ajax com o Angular
    cadastrar(event) {

        event.preventDefault();

        // Obrigatorio para o ultimo parametro passado ao usar o post();
        let postHeaders = new Headers();
        postHeaders.append('Content-Type', 'application/json');

        // No padrão REST, se eu mando post() é porque quero incluir um novo recurso.
        this.http
            .post('v1/fotos', JSON.stringify(this.foto), { headers: postHeaders})
            .subscribe(() => { // executa um codigo quando a requisicao é bem sucedida

                // Dentro do subscribe se limpa o form, por exemplo.

                // vai refletir o dado mais atualizado na view. Também uma maneira de limpar o form.
                this.foto = new FotoComponent(); 
                console.log('Foto Salva com Sucesso');
            }, erro => {
                console.log('Erro ao tentar salvar a foto.');
            });
    }
}