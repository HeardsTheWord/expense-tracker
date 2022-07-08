import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MDBBootstrapModule, NavbarModule } from 'angular-bootstrap-md';

//export {MaterialModule } from './material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    MDBBootstrapModule.forRoot(),
    FlexLayoutModule
  ],
  exports: [
    //MaterialModule,
    MDBBootstrapModule,
    NavbarModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
