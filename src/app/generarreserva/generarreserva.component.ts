import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generarreserva',
  templateUrl: './generarreserva.component.html',
  styleUrls: ['./generarreserva.component.css']
})
export class GenerarreservaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (!localStorage.getItem('userId')) {
      window.location.replace('home');
    }
  }

}
