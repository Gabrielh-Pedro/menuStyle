import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conversor-temperatura',
  templateUrl: './conversor-temperatura.component.html',
  styleUrls: ['./conversor-temperatura.component.css'],
  imports: [FormsModule, CommonModule],
  standalone: true,
})
export class ConversorTemperaturaComponent {
  celsius: number = 0;
  fahrenheit: number | null = null;
  kelvin: number | null = null;

  converter() {
    this.fahrenheit = (this.celsius * 9/5) + 32;
    this.kelvin = this.celsius + 273.15;
  }
}
