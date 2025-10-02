import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-prueba2',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './prueba2.html',
  styleUrl: './prueba2.css'
})
export class Prueba2 {
  productos = [
  {nombre:'FIFA 25', precio: 1000, descripcion: 'Juego De futbol'},
  {nombre:'FORTNITE', precio: 100, descripcion: 'Juego de peleas'},
  {nombre:'Audífonos', precio: 60, descripcion: 'Audífonos inalámbricos con cancelación de ruido.'},
  {nombre:'Smartwatch', precio: 120, descripcion: 'Reloj inteligente con monitor de frecuencia cardiaca.'},
  {nombre:'Tablet', precio: 250, descripcion: 'Tableta de 10 pulgadas con batería de larga duración.'}
]
}