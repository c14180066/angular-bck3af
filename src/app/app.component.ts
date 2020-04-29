import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  angka1 = 0;
  angka2 = 0;
  tanda = '';
  count = 0;
  operator = '';
  constructor(private router : Router){

  }
  input(data1){
    if(this.count == 0){
      this.angka1 = this.angka1*10 + data1;
    }
    else{
      this.angka2 = this.angka2*10 + data1;
    }
  }
  operatorData(data1){
    if(this.count==0){
      this.count=this.count+1;
      if(data1 == "tambah"){
        this.tanda = '+';
      }
       if(data1 == "kurang"){
        this.tanda = '-';
      }
       if(data1 == "kali"){
        this.tanda = '*';
      }
      this.operator += data1;
    }
  }
  pindah(){
    this.router.navigate(['/halaman-dua',this.angka1,this.operator,this.angka2]);
  }
  reset(){
    this.count=0;
    this.angka1=0;
    this.angka2=0;
    this.operator='';
    this.tanda='';
  }
}
