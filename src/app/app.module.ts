import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form/reactive-form.component';
import { SharedModule } from './shared/shared.module';
import { FormSubcriberComponent } from './reactive-form/form-subscriber/form-subscriber.component';

@NgModule({
  declarations: [AppComponent, ReactiveFormComponent, FormSubcriberComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
