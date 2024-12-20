import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss'],
})
export class QuotePage {
  tipoEnvio = 'nacional';
  tipoArticulo = 'encomienda';
  
  get origenLabel(): string {
    return this.tipoEnvio === 'nacional' 
      ? 'Localidad / comuna de origen' 
      : 'Origen';
  }
  
  get destinoLabel(): string {
    return this.tipoEnvio === 'nacional' 
      ? 'Localidad / comuna de destino' 
      : 'Destino';
  }

  cambiarTipoEnvio() {
    // Lógica adicional al cambiar tipo de envío si es necesaria
  }

  seleccionarTipoArticulo(tipo: string) {
    this.tipoArticulo = tipo;
  }
}