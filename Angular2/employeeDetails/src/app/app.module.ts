import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import{FormsModule} from "@angular/forms";
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeTitlePipe } from './employeeTitlePipe/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule,Routes} from '@angular/router';

const appRoutes :Routes =[
  {path: 'home',component:HomeComponent},
  {path: 'employees',component:EmployeeComponent},
  {path: '',redirectTo:'/home',pathMatch:"full"},
  {path: '**',component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent,
    HomeComponent,
    PageNotFoundComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
