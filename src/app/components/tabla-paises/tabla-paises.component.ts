import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryService } from 'src/app/services/country-service.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css'],
})
export class TablaPaisesComponent implements OnInit {
  public listaPaises: any[] = [];
  @Output() eventPaisSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor(private countryService: CountryService) {
    this.countryService.getAllCountries().subscribe(
      (data: any) => {
        this.listaPaises = data;
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {}

  seleccionarPais(pais: any) {
    this.eventPaisSeleccionado.emit(pais);
  }
}
