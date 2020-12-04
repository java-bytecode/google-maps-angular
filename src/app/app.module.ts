import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';
import { ViewStateComponent } from './view-state/view-state.component';
import { ViewSuggestionsComponent } from './view-suggestions/view-suggestions.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    ViewStateComponent,
    ViewSuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
