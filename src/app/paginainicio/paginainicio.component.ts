import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginainicio',
  templateUrl: './paginainicio.component.html',
  styleUrls: ['./paginainicio.component.css']
})
export class PaginainicioComponent implements OnInit {
  verifica: boolean;

  constructor(private router: Router) {
    this.verifica = false;
  }


  ngOnInit() {
    if (!localStorage.getItem('userId')) {
      window.location.replace('home');
    }
  }
  salir(): void {
    localStorage.removeItem("userId");
    this.router.navigate(['home']);
  }
}
