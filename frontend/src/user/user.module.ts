import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { RouterModule } from '@angular/router';
import { routes } from './user.route';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { UserService } from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddUserComponent,
    UpdateUserComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), UserService
  ],

  exports: [RouterModule]
})
export class UserModule { }
