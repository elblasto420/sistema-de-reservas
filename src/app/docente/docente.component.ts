import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //  if (!localStorage.getItem('userId')) {
    //   window.location.replace('home');
    // }
  }
 

}
