import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { BookComponent } from './book/book.component'; 
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookAddComponent } from './book-add/book-add.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

export const routes: Routes = [
    {path:"books", component: BookComponent},
    {path:"book/edit/:id", component: BookEditComponent},
    {path:"book/add", component: BookAddComponent},
    {path:"employees", component: EmployeeComponent},
    {path:"employee/add", component: EmployeeAddComponent},
    {path:"employee/edit/:id", component:EmployeeEditComponent},
    {path: "", redirectTo:"/books", pathMatch:"full"}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }