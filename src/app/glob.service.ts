import { Injectable } from '@angular/core';

@Injectable()
export class GlobService {

  private total;

  getTotal(){
    return this.total;
  }
  setTotal(data1){
    this.total = data1;
  }

  constructor() {
    
   }

}