import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  Monto:number;
  calcularIVA = 0;
  calcularIT = 0;
  calcularUtilidad = 0;
  IVA = 0.13;
  IT = 0.03;
  
  constructor() {}

  calcularImpuestos() {

    this.calcularIVA = this.Monto * this.IVA;
    this.calcularIT = this.Monto * this.IT;
    this.calcularUtilidad = this.Monto - this.calcularIVA - this.calcularIT;
  
  }
  
}