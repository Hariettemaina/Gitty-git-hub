import { Component, OnInit } from '@angular/core';
import { GithubDataService } from '../github-data.service';
import { Users } from '../users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  userData!: Users;
  myData!: {};
  userRepoData!: Users[];
  searchTerm: string = '';
  isLoading: boolean = false;
  isError: boolean = false;



  constructor(private dataService: GithubDataService, private router: Router) { }

  ngOnInit(): void {}
  getUserData() {
    if (this.searchTerm === '') {
      this.isError = true;
      return;
    }
    this.isError = false;
    this.isLoading = true;
    this.dataService.getUserData(this.searchTerm).then((data) => {
      this.userData = data;
      this.router.navigate(['/searchUser', this.userData.login]);
    });

  }

}
