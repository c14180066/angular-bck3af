import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HalamanDuaComponent } from './halaman-dua/halaman-dua.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HalamanDuaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
