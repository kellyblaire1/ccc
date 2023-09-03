import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RippleDirective } from './shared/directives/ripple.directive';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnectModule } from './connect/connect.module';
import { AuthsidebarComponent } from './authsidebar/authsidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RippleDirective,
    SidebarComponent,
    NavbarComponent,
    AuthsidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required for toastr animations
    ToastrModule.forRoot(),
    ConnectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
