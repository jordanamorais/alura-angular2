// PipeTransform = um "contrato" que minha classe tem que implementar
import { Pipe, PipeTransform } from '@angular/core';

// Importou para tipar, no metodo transform, o fotos como FotoComponent e usar as facilidades do TypeScript.
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filterByTitle',
})

// Implementando uma interface para garantir o uso dos métodos corretos (o transform)
export class FilterByTitle implements PipeTransform {

    // Config pipe
    // ---
    // Para configurar um pipe, precisa-se do método "transform"
    
    // Vai receber a lista de fotos e o que eu digitei (o que estou usando como criterio do filtro)
    // Dizendo que digitado é do tipo string (recurso do TypeScript), o typescript me retorna no autocomplete os metodos
    // corretos para atribuição, reduzindo as chances de erro ao digitar um metodo, como por exemplo, o toLowerCase();
    transform(fotos: FotoComponent[], digitado: string) {

        //Ex: Se o digitado for 'f' quero retornar todas as fotos com f.

        digitado = digitado.toLowerCase();

        // Filter da programação funcional
        // Para cada foto, faz determinada coisa.
        // Para cada foto, compare se o título da foto, convertido pra minusculo, inclui o texto digitado pelo usuário
        return fotos.filter( foto => foto.titulo.toLowerCase().includes(digitado));
        
    }
}