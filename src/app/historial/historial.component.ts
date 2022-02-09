import {Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  historia = 'Historial'

  @Input() newHistorial: string [] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() public mostrarHistorial(): void {
    console.log(this.newHistorial);
  }


}
