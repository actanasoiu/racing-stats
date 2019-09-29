import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverPipe } from './pipes/driver.pipe';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [DriverPipe, LoadingSpinnerComponent],
  imports: [CommonModule],
  exports: [DriverPipe, LoadingSpinnerComponent]
})
export class SharedModule { }
