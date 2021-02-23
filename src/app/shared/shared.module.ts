import { CustomSelectComponent } from './customSelect/custom-select.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CustomSelectComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [CustomSelectComponent],
})
export class SharedModule {}
