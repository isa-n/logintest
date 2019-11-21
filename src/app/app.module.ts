import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MyPageComponent } from './my-page/my-page.component';
import { SignoutButtonComponent } from './utility/button/signout-button/signout-button.component';
import { RegisterComponent } from './register/register.component';
import { UnregisterComponent } from './unregister/unregister.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    SignInComponent,
    MyPageComponent,
    SignoutButtonComponent,
    RegisterComponent,
    UnregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
