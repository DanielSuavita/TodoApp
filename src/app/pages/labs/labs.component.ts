import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola';
  tasks = [
    'Instalar Angular CLI',
    'Crear Proyecto',
    'Crear Componentes',
    'Crear Servicio'
  ]
  name = signal('Hola');
}
