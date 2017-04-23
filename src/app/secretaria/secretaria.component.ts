import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // if (!localStorage.getItem('userId')) {
    //   window.location.replace('home');
    // }
  }

}
