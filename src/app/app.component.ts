import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from './componentes/autocomplete/autocomplete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    AutocompleteComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componentes_material';
}
