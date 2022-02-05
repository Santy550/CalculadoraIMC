import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  calculadora = 'NOMBRE';

  public altura?:number;
  public peso?:number;
  public imc?:number;

  constructor() {
  }

  ngOnInit(): void {
  }

  public restarAltura(): void {
    // @ts-ignore
    this.altura = --this.altura;
  }

  public sumarAltura(): void {
    // @ts-ignore
    this.altura = ++this.altura;
  }

  public restarPeso(): void {
    // @ts-ignore
    this.peso = --this.peso;
  }
  public sumarPeso(): void {
    // @ts-ignore
    this.peso = ++this.peso;
  }

  public calcularIMC(): void {
    // @ts-ignore
    this.imc =  this.peso / ((this.altura / 100) * (this.altura / 100));
    console.log(this.imc);
  }

}
