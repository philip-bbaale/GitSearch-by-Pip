import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import {GitUser} from '../classses/git-user'

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  user: GitUser[] = [];
  _URL = 'https://api.github.com/users/';
  token = '?access_token=23028f7a9fd8fad9a4a7e7d633588a079f40e019';

  constructor(private http: HttpClient) {
  }

  /*searchMyUser(searchTerm: string) {
  // tslint:disable-next-line:class-name
  interface data {
  login: string;
  avatar_url: string;
  following: string;
  followers: string;
  public_repos: string;
  }
  
  return new Promise((resolve, reject) => {
  this.user = [];
  // tslint:disable-next-line:max-line-length
  this.http.get<data>(this._URL + searchTerm + this.token).toPromise().then(
  (results) => {
  // @ts-ignore
  this.user.push(results);
  resolve();
  },
  (error) => {
  reject();
  }
  );
  });
}
}
