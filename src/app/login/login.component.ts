import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
  username: '',
  password: ''
  };
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  login(usercreds) {
     const userlogin = this.auth.login(usercreds);
     userlogin.then((isAuthenticated) => {
      console.log('ogg');
       if (isAuthenticated) {
        this.router.navigate(['/dashboard']);
       }
      });
  }
}
