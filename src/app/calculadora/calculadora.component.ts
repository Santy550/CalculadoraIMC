import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  calculadora = 'NOMBRE';

  historial: string[] = [];
  @Output() historico = new EventEmitter<string[]>();

  nombre: string = " ";
  estadoSalud: string = " ";
  altura: number = 110;
  peso: number = 50;
  imc: number = 0;

  flaco: string = "Flaco";
  normal: string = "Normal";
  obeso: string = "Obeso";
  sobrepeso: string = "Sobrepeso";

  constructor() {
  }

  ngOnInit(): void {
  }

  public restarAltura(): void {
    this.altura = --this.altura;
  }

  public sumarAltura(): void {
    this.altura = ++this.altura;
  }

  public restarPeso(): void {
    this.peso = --this.peso;
  }

  public sumarPeso(): void {
    this.peso = ++this.peso;
  }

  public calcularIMC(): void {
    this.imc = Math.round(this.peso / ((this.altura / 100) * (this.altura / 100)));
  }

  public estado(): void {

    if (this.imc >= 0 && this.imc < 18.5) {
      this.estadoSalud = this.flaco;
    } else if (this.imc >= 18.5 && this.imc < 24.9) {
      this.estadoSalud = this.normal;
    } else if (this.imc >= 25 && this.imc < 29.9) {
      this.estadoSalud = this.obeso;
    } else if (this.imc >= 30) {
      this.estadoSalud = this.sobrepeso;
    } else {
      this.estadoSalud = "No se permiten valores menores que 0";
    }

  }

  public mostrarHistorial(): void {
    this.historial.push(this.nombre + " - " + this.estadoSalud);
    this.historico.emit(this.historial);
  }


}
