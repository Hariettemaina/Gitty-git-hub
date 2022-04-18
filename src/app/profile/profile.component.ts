import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 users!: any[];
 repository!: any[];
 username!: string;

 
  constructor(private _githubService: GithubService) {
    this._githubService.getUsers().((users: any) => [
      console.log(users),
      this.users,
    ]);
   }

  ngOnInit(): void {
  }

}
