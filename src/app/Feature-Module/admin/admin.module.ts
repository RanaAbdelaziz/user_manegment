import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './user-list/add-user/add-user.component';
import { EditUserComponent } from './user-list/edit-user/edit-user.component';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/Shared-Module/shared.module';



@NgModule({
  declarations: [
    AdminComponent,
    UserListComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AdminModule { }
