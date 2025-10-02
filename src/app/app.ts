import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prueba } from "./prueba/prueba";
import { Prueba2 } from './prueba2/prueba2';

@Component({
  selector: 'app-root',
  standalone: true,             
  imports: [RouterOutlet, Prueba, Prueba2], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ComercioElectronico');
}
