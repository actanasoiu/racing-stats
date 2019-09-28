import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DriverPipe } from './pipes/driver.pipe';

@NgModule({
  declarations: [DriverPipe],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [DriverPipe]
})
export class SharedModule { }
