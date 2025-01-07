import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola!';
  tasks = ['Instalar el angular CLI',
          'Crear un nuevo proyecto',
          'Crear un nuevo componente'
  ]
}
