import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManualComponent } from './manual/manual';
import { ChildComponent } from './manual/child';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpPracticeComponent } from './http-practice/http-practice.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManualComponent,
    ChildComponent,
    DataDrivenComponent,
    TemplateDrivenComponent,
    HttpPracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
