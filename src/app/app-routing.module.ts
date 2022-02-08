import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculadoraComponent} from "./calculadora/calculadora.component";
import {HistorialComponent} from "./historial/historial.component";

const routes: Routes = [
  {path: 'calculadora', component: CalculadoraComponent},
  {path: 'historial', component: HistorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
