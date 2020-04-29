import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hasil',
  templateUrl: './halaman-dua.component.html',
  styleUrls: ['./halaman-dua.component.css']
})
export class HasilComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  angkapertama = '';
  angkakedua = '';
  operator = '';
  hasil = 0;
  ngOnInit() {
    let data1 = this.route.snapshot.paramMap.get('angka1');
    this.angkapertama = data1;
     let operator = this.route.snapshot.paramMap.get('operator');
    this.operator = operator;
     let data2 = this.route.snapshot.paramMap.get('angka2');
    this.angkakedua = data2;
    if(this.operator == "tambah"){
      this.hasil=parseInt(this.angkapertama) + parseInt(this.angkakedua);
    }
    if(this.operator == "kali"){
       this.hasil=parseInt(this.angkapertama) * parseInt(this.angkakedua);
    }
    if(this.operator == "kurang"){
       this.hasil=parseInt(this.angkapertama) - parseInt(this.angkakedua);
    }
  }

}