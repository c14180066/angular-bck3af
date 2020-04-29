import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(private route : Router){}
  input(){
    this.route.navigate(['/halaman-input']);
  }
  list(){
    this.route.navigate(['/halaman-list']);
  }
  edit(){
    this.route.navigate(['/halaman-edit']);
  }
  a = '';
  b = '';
  countArr = 0;
  arrNamaJur = [];
  arrDetailJur = [];
  submit(data1, data2){
    this.a = data1;
    this.b = data2;
    this.arrNamaJur.push(this.a);
    this.arrDetailJur.push(this.b);
    this.countArr = this.countArr + 1;
  }
}
