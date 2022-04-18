import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Users } from './users'
import { Repository } from './repository';
@Injectable({
  providedIn: 'root'
})
export class GithubDataService {

  constructor() { }
}
