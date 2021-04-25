import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public paisSeleccionado: any;
  public listaActores: any;

  constructor(private actorService: ActorService) {
    this.actorService.getAllActores().subscribe(
      (res) => {
        this.listaActores = res;
        console.log(this.listaActores);
      },
      (error) => console.log(error)
    );

    // TODO: TERMINAR LA TABLA
  }

  ngOnInit(): void {}

  cargarPaisSeleccionado(pais: any) {
    this.paisSeleccionado = pais;
  }
}
