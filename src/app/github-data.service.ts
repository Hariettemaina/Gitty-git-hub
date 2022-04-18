import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Users } from './users'
import { Repository } from './repository';
@Injectable({
  providedIn: 'root'
})
export class GithubDataService {
token: string = environment.accessToken;


  constructor(private http: HttpClient) {}

    getUserData(username: string) {
      return this.http
      .get<Users>(
        `https://api.github.com/users/${username}`
      )
      .toPromise();
    }
  
}
