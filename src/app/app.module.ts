import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { CustomerComponent } from './customer/customer.component';
import { ProjectComponent } from './project/project.component';
import { MyworkComponent } from './mywork/mywork.component';
import { SettingComponent } from './setting/setting.component';
import { ViewprofileComponent } from './organization/profile/viewprofile/viewprofile.component';
import { ConfignavbarComponent } from './organization/confignavbar/confignavbar.component';
import { AddprofileComponent } from './organization/profile/addprofile/addprofile.component';
import { AdddepartmentComponent } from './organization/department/adddepartment/adddepartment.component';
import { AddemployeeComponent } from './organization/employee/addemployee/addemployee.component';
import { ViewemployeeComponent } from './organization/employee/viewemployee/viewemployee.component';
import { AddlocationComponent } from './organization/location/addlocation/addlocation.component';
import { ViewlocationComponent } from './organization/location/viewlocation/viewlocation.component';
import { AddroleComponent } from './organization/role/addrole/addrole.component';
import { ViewroleComponent } from './organization/role/viewrole/viewrole.component';
import { ViewdepartmentComponent } from './organization/department/viewdepartment/viewdepartment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    FormsComponent,
    CustomerComponent,
    ProjectComponent,
    MyworkComponent,
    SettingComponent    ,
    ViewprofileComponent,
    ConfignavbarComponent,
    AddprofileComponent,
    AdddepartmentComponent,
    ViewdepartmentComponent,
    AddemployeeComponent,
    ViewemployeeComponent,
    AddlocationComponent,
    ViewlocationComponent,
    AddroleComponent,
    ViewroleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }