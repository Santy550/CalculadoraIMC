import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculadora IMC';

  public nombre: string = " ";
  public estadoSalud: string = " ";
  public historico: string [] = [];

  /*public mostrarHistorial(historico: string[] ): void {
    console.log(historico);
    this.historico = historico;

  }*/

  public onHistoricoNuevo(eventData: any): void{
    console.log(eventData);
    this.historico = eventData;
  }


}

