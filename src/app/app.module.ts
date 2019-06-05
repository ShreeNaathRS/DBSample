import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { FilenotfoundComponent } from './components/filenotfound/filenotfound.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ViewComponent } from './components/view/view.component';
import { EditComponent } from './components/edit/edit.component';
import { GetidPipe } from './pipes/getid.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    FilenotfoundComponent,
    ViewComponent,
    EditComponent,
    GetidPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
