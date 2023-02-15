import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias';
  listNoticias: any[] = [];
  loading = false;
  constructor(private _noticiaService: NoticiasService){

  }

  buscarNoticias(parametros: any){
    this.loading = true;
    this.listNoticias = [];
    setTimeout(() => {
      this._noticiaService.getNoticias(parametros).subscribe(data =>{
        this.loading = false;
        this.listNoticias = data.articles;
      }, error =>{
        console.log(error);
        this.loading = false;
      })
    }, 1000);
    
  }
}
