import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorService } from 'src/app/services/actor.service';

interface Actor {
  nombre: string;
  apellido: string;
  email: string;
  telefono: number;
  nacionalidad: string;
  imagenPais: string;
}

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css'],
})
export class FormActorComponent implements OnInit {
  @Input() paisSeleccionado!: any;
  public formActor: FormGroup;

  constructor(private actorService: ActorService, private fb: FormBuilder) {
    this.formActor = this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      edad: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      nacionalidad: [
        { value: '', disabled: true },
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.actorService.getAllActores().subscribe(
      (res) => console.log(res),
      (error) => console.log(error)
    );
  }

  enviarForm() {
    // if (this.paisSeleccionado) {
    this.formActor.get('nacionalidad')?.setValue(this.paisSeleccionado.demonym);
    // }
  }
}
