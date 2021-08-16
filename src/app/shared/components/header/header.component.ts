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
  constructor(private router: Router, private usersService: UsersService) {}

  user = this.usersService.getUsersById('1') as UserModel;

  ngOnInit(): void {}
  SignOut() {
    sessionStorage.clear();
    return this.router.navigateByUrl('login');
  }
}
