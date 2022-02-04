import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  calculadora = 'NOMBRE';

  /*operandoA:number;
  operandoB:number;
  resultado:number;

  onSumar():void {
    this.resultado = this.operandoA + this.operandoB;
  }*/
  constructor() { }

  ngOnInit(): void {
  }

  public sumar():void {

  }

}
