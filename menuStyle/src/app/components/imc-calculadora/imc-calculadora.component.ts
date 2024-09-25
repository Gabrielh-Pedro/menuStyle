import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Adicione esta linha

@Component({
  selector: 'app-imc-calculadora',
  templateUrl: './imc-calculadora.component.html',
  styleUrl: './imc-calculadora.component.css',
  imports: [FormsModule, CommonModule], // Adicione CommonModule aqui
  standalone: true,
})
export class ImcCalculadoraComponent {
  peso: number = 0;
  altura: number = 0;
  imc: number | null = null;
  classificacao: string = '';

  calcularIMC() {
    this.imc = this.peso / (this.altura * this.altura);
    if (this.imc < 18.5) {
      this.classificacao = 'Abaixo do peso';
    } else if (this.imc < 24.9) {
      this.classificacao = 'Peso normal';
    } else if (this.imc < 29.9) {
      this.classificacao = 'Sobrepeso';
    } else if (this.imc < 34.9) {
      this.classificacao = 'Obesidade grau I';
    } else if (this.imc < 39.9) {
      this.classificacao = 'Obesidade grau II';
    } else {
      this.classificacao = 'Obesidade grau III';
    }
  }
}
