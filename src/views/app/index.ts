import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { App } from './app';
import { TODO_STORE_PROVIDER } from '../../core/store';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    TODO_STORE_PROVIDER
  ],
  // declarations tells angular that `App` belongs to `AppModule`
  declarations: [App],
  bootstrap: [App],
})
export class AppModule {}
