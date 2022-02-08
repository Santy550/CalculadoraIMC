import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Call} from "@angular/compiler";

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  historia = 'Historial'

  @Input() nombre: string = " ";
  @Input() estadoSalud: string = " ";
  @Input() historial: string [] = [this.nombre, this.estadoSalud];

  constructor() {
  }

  ngOnInit(): void {
  }


}
