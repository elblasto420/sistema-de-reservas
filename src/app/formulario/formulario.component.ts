import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioHttpService } from '../servicios/servicio-http.service';
import { Login } from '../models/login';
@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],

})
export class FormularioComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router, private servicio: ServicioHttpService) { }

  ngOnInit() {
    // if (localStorage.getItem('userId')) {
    //   this.router.navigate(['inicio']);
    // }
  }

  register(): void {
    // this.servicio.get("http://127.0.0.1:8000/api/storage/login/" + this.username + "/" + this.password).subscribe(
    //   response => {
    //     this.verify(response);
    //   }
    // );
    if (this.username == 'admin' && this.password == 'root123') {
      this.router.navigate(['inicio']);
    }
      else{
        if (this.username == 'Juan Perez' && this.password == 'juanperez')
        this.router.navigate(['paginausuario']);
      }
  }
  verify(response: Login[]): void {
    let count: number = response[0].COUNT;
    if (count === 1) {
      localStorage.setItem('userId', JSON.stringify(count));
      this.router.navigate(['inicio']);
    }
  }
}

