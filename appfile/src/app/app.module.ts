import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AdventureDetailsComponent } from './adventure-details/adventure-details.component';
import { LogInComponent } from './log-in/log-in.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
//import { EmployeeFormComponent } from './employee-details/employee-form/employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    AdventureDetailsComponent,
    LogInComponent,
    CustomErrorComponent,
    UploadFileComponent
    //EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
