import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnURL: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  autorizado = {
    usuario : 'admin',
    clave   : 'admin'
  };

  formulario = {
    usuario : '',
    clave   : ''
  };

  ngOnInit(): void {
    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onLoggedin(e) {
    e.preventDefault();
    console.log(this.formulario, this.autorizado);
    if (this.formulario.usuario.length === 0 || this.formulario.clave.length === 0){
      alert("Complete el fomulario con sus credenciales");
    } else if (this.formulario.usuario === this.autorizado.usuario && this.formulario.clave === this.autorizado.clave){
      localStorage.setItem('isLoggedin', 'true');
      if (localStorage.getItem('isLoggedin')){
        this.router.navigate([this.returnURL]);
      }
    } else {
      alert("Nombre de usuario y/o clave incorrecto");
    }
    
  }

}
