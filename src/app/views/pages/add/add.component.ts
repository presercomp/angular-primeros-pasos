import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }
  valorPantalla = 0;
  factorMultiplicacion = 1;
  valorMultiplicacion = 0;
  ngOnInit(): void {
  }
  nada() {

  }

  corregir(){
    let largo = this.valorMultiplicacion.toString().length;
    if(largo > 1){
      this.valorMultiplicacion = parseInt(this.valorMultiplicacion.toString().substring(0, largo-1));
    } else {
      this.valorMultiplicacion = 0;
    }
  }

  borrar(){
    this.valorPantalla = 0;
    this.valorMultiplicacion = 0;
    this.factorMultiplicacion = 1;
  }

  multiplicar() {
    this.factorMultiplicacion = this.valorMultiplicacion;
    this.valorMultiplicacion = 0;
  }

  sumar() {
    this.valorPantalla = this.valorPantalla + (this.factorMultiplicacion * this.valorMultiplicacion);
    this.valorMultiplicacion = 0;
    this.factorMultiplicacion = 1;
  }

  imprimir(){
    if(confirm("¿Está seguro/a de querer imprimir una boleta por un total de $" + this.valorPantalla)){
      alert("Boleta impresa");
      this.borrar();
    }
  }

  tripleCero(){
    if(this.valorMultiplicacion !== 0) {
      this.valorMultiplicacion = parseInt(this.valorMultiplicacion.toString()+"000");
     }
  }
  
  botonera(valor){
    if(this.valorMultiplicacion == 0 && valor == 0){
       //no debería hacer nada
    } else {
      if(this.valorMultiplicacion == 0) {
        this.valorMultiplicacion = valor;
      } else {
        this.valorMultiplicacion = parseInt(this.valorMultiplicacion.toString()+""+valor.toString());
      }
    }
  }



}
