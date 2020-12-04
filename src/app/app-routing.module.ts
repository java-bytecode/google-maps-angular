import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewStateComponent } from './view-state/view-state.component';
import { ViewSuggestionsComponent } from './view-suggestions/view-suggestions.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: 'view', component: ViewComponent},
  {path: 'view-state', component: ViewStateComponent},
  {path: 'view-suggestions', component: ViewSuggestionsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
