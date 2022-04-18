import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Users } from './users';
import { Repository } from './repository';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor() { }
}
