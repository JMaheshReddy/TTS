import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ProjectComponent } from './project/project.component';
import { CustomerComponent } from './customer/customer.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'projects', component: ProjectComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
