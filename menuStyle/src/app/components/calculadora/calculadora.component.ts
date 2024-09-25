import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  imports: [FormsModule],
  styleUrls: ['./calculadora.component.css'],
  standalone: true,
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  operacao: string = '';
  resultado: number | null = null;

  calcular() {
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.numero1 + this.numero2;
        break;
      case 'subtracao':
        this.resultado = this.numero1 - this.numero2;
        break;
      case 'multiplicacao':
        this.resultado = this.numero1 * this.numero2;
        break;
      case 'divisao':
        this.resultado = this.numero1 / this.numero2;
        break;
      default:
        this.resultado = null;
    }
  }
}
