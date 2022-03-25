import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NumberOnlyDirective} from './directives/number-only/number-only.directive';
import {CharacterOnlyDirective} from './directives/character-only/character-only.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomSearch } from "../../src/assets/pipe/custom-search.pipe"
@NgModule({
  declarations: [
    AppComponent,
    NumberOnlyDirective,
    CharacterOnlyDirective,
    CustomSearch
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
     

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
