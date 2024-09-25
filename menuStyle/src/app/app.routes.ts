import { Routes } from '@angular/router';
import { CalcularMediaComponent } from './components/calcular-media/calcular-media.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ApoliceSeguroComponent } from './components/apolice-seguro/apolice-seguro.component';
import { ConversorTemperaturaComponent } from './components/conversor-temperatura/conversor-temperatura.component';
import { ImcCalculadoraComponent } from './components/imc-calculadora/imc-calculadora.component';

export const appRoutes: Routes = [
  { path: 'calcular-media', component: CalcularMediaComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'apolice-seguro', component: ApoliceSeguroComponent },
  { path: 'conversor-temperatura', component: ConversorTemperaturaComponent },
  { path: 'imc-calculadora', component: ImcCalculadoraComponent },
  { path: '', redirectTo: '/calcular-media', pathMatch: 'full' }
];
