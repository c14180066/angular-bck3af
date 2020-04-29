import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HasilComponent } from './halaman-dua/halaman-dua.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES:Routes=[
  { path:'halaman-dua', component : HasilComponent},
   { path:'halaman-dua/:angka1/:operator/:angka2', component : HasilComponent}
     
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, HelloComponent, HasilComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
