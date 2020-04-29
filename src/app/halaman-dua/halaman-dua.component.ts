import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hasil',
  templateUrl: './halaman-dua.component.html',
  styleUrls: ['./halaman-dua.component.css']
})
export class HasilComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  angkapertama='';
  angkakedua='';
  opr='';
  hasil=0;
  ngOnInit() {
    let pert= this.route.snapshot.paramMap.get('angka1');
    this.angkapertama=pert;
     let op= this.route.snapshot.paramMap.get('operator');
    this.opr=op;
     let ked= this.route.snapshot.paramMap.get('angka2');
    this.angkakedua=ked;
    if(this.opr=="tambah"){
      this.hasil=parseInt(this.angkapertama)+parseInt(this.angkakedua);
    }
    if(this.opr=="kali"){
       this.hasil=parseInt(this.angkapertama)*parseInt(this.angkakedua);
    }
    if(this.opr=="kurang"){
       this.hasil=parseInt(this.angkapertama)-parseInt(this.angkakedua);
    }
  }

}