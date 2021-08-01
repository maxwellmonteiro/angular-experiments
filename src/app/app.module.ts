import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomComboboxComponent } from './components/custom-combobox/custom-combobox.component';
import { CustomTextinputComponent } from './components/custom-textinput/custom-textinput.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomComboboxComponent,
    CustomTextinputComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    FormsModule,
    MatCommonModule,
    MatFormFieldModule,
    MatSelectModule, 
    MatInputModule       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
