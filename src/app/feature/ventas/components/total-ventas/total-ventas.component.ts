import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-ventas',
  templateUrl: './total-ventas.component.html',
  styleUrls: ['./total-ventas.component.scss']
})
export class TotalVentasComponent implements OnInit {

  periodo: string = "septiembre";
  description: string = "septiembre, 2020";

  constructor() { }

  ngOnInit(): void {
  }

}
