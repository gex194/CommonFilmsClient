import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import User from '../../interfaces/User';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {
  public user: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    isAdmin: false,
    isDeleted: false,
    watchList: [],
    friendList: []
  }

  constructor(private _userService: UserService, private _authService: AuthService, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    const userId = this._route.snapshot.paramMap.get('id');
    this._userService.getUserById(userId).subscribe(user => {
      this._authService.setCurrentUser(user);
      this.user = user;
    });
  }
}
