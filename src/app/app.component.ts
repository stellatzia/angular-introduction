import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Stella";
  lastname = 'Tzianoudaki';

  person = {
    givenName: 'Stella',
    surName: 'Tzianoudaki',
    age: '32',
    email: 'stzianoudaki@aueb.gr'
  };
}
