// PipeTransform = um "contrato" que minha classe tem que implementar
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByTitle',
})

export class FilterByTitle implements PipeTransform {

    // Config pipe
    // ---
    // Para configurar um pipe, precisa-se do método "transform"
    
    // Vai receber a lista de fotos e o que eu digitei (o que estou usando como criterio do filtro)
    transforma(fotos, digitado) {

    }
}