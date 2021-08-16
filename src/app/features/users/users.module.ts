import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './pages/create-user/create-user.component';

@NgModule({
  declarations: [CreateUserComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [],
})
export class UsersModule {}
