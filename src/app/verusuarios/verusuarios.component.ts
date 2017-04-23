import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'verusuarios',
  templateUrl: './verusuarios.component.html',
  styleUrls: ['./verusuarios.component.css']
})
export class VerusuariosComponent implements OnInit {

  usuarios: Usuario [];

  constructor(private router: Router) {
    
    this.usuarios = new Array();
    this.usuarios= 
    [{nombre: 'Carlos', apellidopaterno: 'Heredia', apellidomaterno: 'Perez', correo: 'pepitox', grupo: 'softure', materia: 'ingles'},
    {nombre: 'Diego', apellidopaterno: 'Pastos', apellidomaterno:'Yapura', correo: 'flash', grupo: '3', materia: 'ingles 69'}];
    // let u: Usuario = {nombre: 'carlos', apellido: 'perez', correo: 'pepitox', grupo: 'softure', materia: 'ingles'};
    // this.usuarios = new Array();
    // this.usuarios.push(u);
  }

  ngOnInit() {
  }

  borrar(usuario): void {
    let index= this.usuarios.indexOf(usuario);
    this.usuarios.splice(index, 1);
  }
  modificar(usuario): void {
    let index= this.usuarios.indexOf(usuario);
    this.router.navigate(['inicio/editarUsuarios', usuario.correo]);
  }


}
