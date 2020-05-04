import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ProjectSearchComponent } from './project/project-search/project-search.component';
import { ProjectProfileComponent } from './project/project-profile/project-profile.component';
import { CustSearchComponent } from './customer/cust-search/cust-search.component';
import { CustProfileComponent } from './customer/cust-profile/cust-profile.component';
import { SettingComponent } from './setting/setting.component';
import { ViewprofileComponent } from './organization/profile/viewprofile/viewprofile.component';
import { AddprofileComponent } from './organization/profile/addprofile/addprofile.component';
import { ViewdepartmentComponent } from './organization/department/viewdepartment/viewdepartment.component';
import { AdddepartmentComponent } from './organization/department/adddepartment/adddepartment.component';
import { ViewlocationComponent } from './organization/location/viewlocation/viewlocation.component';
import { AddlocationComponent } from './organization/location/addlocation/addlocation.component';
import { ViewroleComponent } from './organization/role/viewrole/viewrole.component';
import { AddroleComponent } from './organization/role/addrole/addrole.component';
import { ViewemployeeComponent } from './organization/employee/viewemployee/viewemployee.component';
import { AddemployeeComponent } from './organization/employee/addemployee/addemployee.component';
import { LoginComponent } from './login/login.component';
import { TimesheetComponent } from './timecard/timesheet/timesheet.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customer/search', component: CustSearchComponent },
  { path: 'customer/profile', component: CustProfileComponent },
  { path: 'project/search', component: ProjectSearchComponent },
  { path: 'project/profile', component: ProjectProfileComponent },
  { path: 'mywork', component: MyworkComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'viewprofile', component: ViewprofileComponent },
  { path: 'addprofile', component: AddprofileComponent },
  { path: 'viewdepratment', component: ViewdepartmentComponent },
  { path: 'adddepratment', component: AdddepartmentComponent },
  { path: 'viewlocation', component: ViewlocationComponent },
  { path: 'addlocation', component: AddlocationComponent },
  { path: 'viewrole', component: ViewroleComponent },
  { path: 'addrole', component: AddroleComponent },
  { path: 'viewemployee', component: ViewemployeeComponent },
  { path: 'addemployee', component: AddemployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'timecard/timesheet', component: TimesheetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
