import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormPosterService } from './services/form-poster.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo:'home', pathMatch:'full' },
    ])
  ],
  providers: [FormPosterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
