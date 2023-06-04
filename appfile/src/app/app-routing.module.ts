import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AdventureDetailsComponent } from './adventure-details/adventure-details.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
{
  path:"AdventureDetails",component:AdventureDetailsComponent
},
{
  path: '',redirectTo:'LogIn',pathMatch :'full'
},
{
  path:"AdventureDetails",component:AdventureDetailsComponent
},
{
  path:"employeedetails",component:EmployeeDetailsComponent
},
{
  path:"LogIn",component:LogInComponent
},
{
  path:"**",component:CustomErrorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
