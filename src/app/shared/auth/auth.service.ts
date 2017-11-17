import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs   } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TokenDataInterface } from './interfaces/token-data.interface';

@Injectable()
export class AuthService {
  isAuthenticated: Boolean = false;
  accesToken;

  constructor(private http: HttpClient, private router: Router) {}

  login(usercreds) {

    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', usercreds.username);
    body.set('password', usercreds.password);

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', 'Basic ' + btoa('trusted-app' + ':' + 'secret'))
    .set('Access-Control-Allow-Origin', '*')
    .set('cache-control', 'no-cache')
    .set('Accept', '*/*');

    return new Promise(resolve => {
        this.http.post('http://localhost:8080/oauth/token', body.toString(), {headers} )
        .subscribe(data => {
          const tokenData = <TokenDataInterface>data;
          if (tokenData.access_token !== null) {
            this.accesToken = tokenData.access_token;
            this.isAuthenticated = true;
          }
          resolve(this.isAuthenticated);
        });
    });
  }
}
