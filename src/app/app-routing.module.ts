import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { FilenotfoundComponent } from './components/filenotfound/filenotfound.component';
import { ViewComponent } from './components/view/view.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'create'},
  {path:'create', component:CreateComponent},
  {path:'view', component:ViewComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'**', component:FilenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
