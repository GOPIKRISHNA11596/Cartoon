import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './home/welcome.component';
import { CartoonListComponent } from './cartoon/cartoon-list.component';
import { StarComponent } from './shared/star.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    CartoonListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegistrationComponent},
      {path: 'cartoonlist', component: CartoonListComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '**', component: WelcomeComponent},
    ])

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
