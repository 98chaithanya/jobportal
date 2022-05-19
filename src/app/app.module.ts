import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminJoblistComponent } from './admin-joblist/admin-joblist.component';
import { AdminAddjobComponent } from './admin-addjob/admin-addjob.component';
import { AdminEditjobComponent } from './admin-editjob/admin-editjob.component';
import { HeaderComponent } from './header/header.component';
import { AuthService} from './auth.service';
import { JobsService} from './jobs.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminJoblistComponent,
    AdminAddjobComponent,
    AdminEditjobComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [AuthService,JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
