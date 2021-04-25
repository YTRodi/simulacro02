import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public paisSeleccionado: any;
  public tablaCabecera: any;
  public listaActores: any = null;

  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
    this.actorService.getAllActores().subscribe(
      (res) => {
        this.listaActores = res;

        if (res.length > 0) {
          this.tablaCabecera = Object.keys(res[0]);
          this.tablaCabecera = this.tablaCabecera.sort();
        }
      },
      (error) => console.log(error)
    );
  }

  cargarPaisSeleccionado(pais: any) {
    this.paisSeleccionado = pais;
  }
}
