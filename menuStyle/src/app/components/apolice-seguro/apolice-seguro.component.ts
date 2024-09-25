import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Importando CommonModule

@Component({
  selector: 'app-apolice-seguro',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Adicionando CommonModule aqui
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.css'],
})
export class ApoliceSeguroComponent {
  nome: string = '';
  sexo: string = '';
  idade: number = 0;
  valorAutomovel: number = 0;
  valorApolice: number | null = null;

  calcularApolice() {
    if (this.sexo === 'masculino') {
      this.valorApolice = this.idade <= 25 ? this.valorAutomovel * 0.15 : this.valorAutomovel * 0.10;
    } else if (this.sexo === 'feminino') {
      this.valorApolice = this.valorAutomovel * 0.08;
    }
  }
}
