import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() parametrosSeleccionados = new EventEmitter<any>();
  
  categoriaSeleccionada = 'general';
  paisSeleccionado = 'ar';
  
  categorias : any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'},
    {value: 'entertainment', nombre: 'Entretenimiento'},
    {value: 'health', nombre: 'Salud'},
    {value: 'science', nombre: 'Ciencia'},
    {value: 'sports', nombre: 'Deportes'},
    {value: 'technology', nombre: 'Tecnologia'},


  ];

  paises: any[] = [
  {value: 'ar', nombre: 'Argentina'},
  {value: 'br', nombre: 'Brasil'},
  {value: 'fr', nombre: 'Francia'},
  {value: 'hu', nombre: 'Hungría'},
  {value: 'mx', nombre: 'Mexico'},
  {value: 'gb', nombre: 'Reino Unido'},
  ]


  buscarNoticia(){
   const PARAMETROS = {
    categoria: this.categoriaSeleccionada,
    pais: this.paisSeleccionado
   }
   this.parametrosSeleccionados.emit(PARAMETROS)
  }

  
}


