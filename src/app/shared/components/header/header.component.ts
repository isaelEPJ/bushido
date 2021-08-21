import { UsersService } from './../../../features/users/services/users.service';
import { UserModel } from './../../../features/users/model/users.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentUser?: UserModel;

  constructor(private router: Router, private usersService: UsersService) {}

  // user = sessionStorage.getItem<UserModel>('currentUser');
  // user = this.usersService.getUsersById('1') as UserModel;

  ngOnInit(): void {
    const session = sessionStorage.getItem('currentUser');
    if (session) {
      this.currentUser = JSON.parse(session);
    }
  }
  SignOut() {
    sessionStorage.clear();
    return this.router.navigateByUrl('login');
  }
}
