import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  imports: [CommonModule],
  templateUrl: './prueba.html',
  styleUrl: './prueba.css'
})
export class Prueba {
nombre='Juan';
edad=18;
}
