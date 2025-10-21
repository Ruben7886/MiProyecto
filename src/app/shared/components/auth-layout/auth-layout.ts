import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './auth-layout.html',
  styleUrls: ['./auth-layout.css'],
})
export class AuthLayout {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() showBackButton: boolean = true;
  @Input() imageUrl: string = 'images/fruta.webp';
}
