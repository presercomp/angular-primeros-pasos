import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnURL: any;
  reqHeader: HttpHeaders;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { 
    this.reqHeader = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
  }

  formulario = {
    usuario : '',
    clave   : ''
  };

  ngOnInit(): void {
    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  async onLoggedin(e) {
    e.preventDefault();
    let usuario = this.formulario.usuario;
    let clave   = this.formulario.clave;
    if (usuario.length === 0 || clave.length === 0) {
      alert("Complete el fomulario con sus credenciales");
    } else {
      const result = await this.http.post<Request>('/APIRest/ingreso', {usuario, clave}, {headers: this.reqHeader, observe: 'response'}).toPromise();
      console.log(result);
      if(result.status == 200) {
        localStorage.setItem('isLoggedin', 'true');
        if (localStorage.getItem('isLoggedin')){
          this.router.navigate([this.returnURL]);
        }
      } else {
        alert("Nombre de usuario y/o clave incorrecto");
      }
    }
  }

}
