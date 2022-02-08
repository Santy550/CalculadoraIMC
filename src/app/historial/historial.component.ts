import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  historia = 'Historial'

  @Input() estadoSaulud: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public mostrarHistorial(): string {
    return this.estadoSaulud;
  }


}
