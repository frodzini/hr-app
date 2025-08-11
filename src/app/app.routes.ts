import {Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ListEmployeesComponent} from './employee/employee.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';


export const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'employee', component: ListEmployeesComponent},
      {path: 'add-employee', component: CreateEmployeeComponent},
    ]
  }
];

