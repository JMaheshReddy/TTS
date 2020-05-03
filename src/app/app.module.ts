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
import { CustSearchComponent } from './customer/cust-search/cust-search.component';
import { CustProfileComponent } from './customer/cust-profile/cust-profile.component';
import { ProjectSearchComponent } from './project/project-search/project-search.component';
import { ProjectProfileComponent } from './project/project-profile/project-profile.component';
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
import { CustLocationComponent } from './customer/cust-location/cust-location.component';
import { CustContactComponent } from './customer/cust-contact/cust-contact.component';
import { CustLogoComponent } from './customer/cust-logo/cust-logo.component';
import { CustFileComponent } from './customer/cust-file/cust-file.component';
import { ProjectTaskComponent } from './project/project-task/project-task.component';
import { ProjectTeamComponent } from './project/project-team/project-team.component';
import { ProjectFileComponent } from './project/project-file/project-file.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    CustSearchComponent,
    CustProfileComponent,
    ProjectSearchComponent,
    ProjectProfileComponent,
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
    ViewroleComponent,
    CustLocationComponent,
    CustContactComponent,
    CustLogoComponent,
    CustFileComponent,
    ProjectTaskComponent,
    ProjectTeamComponent,
    ProjectFileComponent,
    LoginComponent,
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