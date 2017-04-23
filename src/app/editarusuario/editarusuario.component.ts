import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioHttpService } from '../servicios/servicio-http.service';
@Component({
  selector: 'editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})
export class EditarusuarioComponent implements OnInit {

correo: string;
constructor(private route: ActivatedRoute, private service: ServicioHttpService) { 
  this.route.params.subscribe(params => {
    this.correo= params['correo'];
  });
  console.log(this.correo);
}

  ngOnInit() {
  }

}
