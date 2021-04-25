import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
      nombre: new FormControl('Test', [
        Validators.required,
        Validators.minLength(3),
      ]),
      apellido: new FormControl('Test apellido', [
        Validators.required,
        Validators.minLength(3),
      ]),
      edad: new FormControl(18, [
        Validators.required,
        Validators.min(18),
        Validators.max(99),
      ]),
      email: new FormControl('test@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  ngOnInit(): void {}

  getErrorMessage(nombreDeControl: string): string | undefined {
    if (!nombreDeControl) return;

    if (this.formActor.get(nombreDeControl)?.hasError('required')) {
      return `El ${nombreDeControl} es requerido.`;
    }

    if (this.formActor.get(nombreDeControl)?.hasError('min')) {
      return `La ${nombreDeControl} debe ser como mínimo 18`;
    }

    if (this.formActor.get(nombreDeControl)?.hasError('max')) {
      return `La ${nombreDeControl} debe ser como máximo 99`;
    }

    if (this.formActor.get(nombreDeControl)?.hasError('email')) {
      return `El ${nombreDeControl} es inválido.`;
    }

    if (!this.formActor.get(nombreDeControl)?.hasError('minLength')) {
      return `El ${nombreDeControl} debe de tener 3 caracteres como mínimo`;
    }

    return '';
  }

  enviarForm() {
    const { name: countryName, flag: flagImage } = this.paisSeleccionado;
    const { nombre, apellido, edad, email } = this.formActor.value;
    const newActor = {
      nombre,
      apellido,
      edad,
      email,
      countryName,
      flagImage,
    };

    this.actorService.addActor(newActor);
  }
}
