import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { ActivatedRoute } from '@angular/router';
import { GithubDataService } from '../github-data.service';
import { Repository } from '../repository';
@Component({
  selector: 'app-github-user-details',
  templateUrl: './github-user-details.component.html',
  styleUrls: ['./github-user-details.component.css']
})
export class GithubUserDetailsComponent implements OnInit {
  userName: string = '';
  isError: boolean = false;
  userNameLink: any;
  userData: Users;
  showUserDetails: boolean = false;
  repoData: Repository[];


  isLoading: boolean = true;
  constructor(
    private router: ActivatedRoute,
    private dataService: GithubDataService
  ) {}
  getUserData() {
    if (this.userName === '') {
      this.isLoading = false;
      this.isError = true;
      return;
    }
    this.showUserDetails = true;
    this.isLoading = true;
    this.dataService.getUserData(this.userName).then((data) => {
      this.isLoading = false;
      this.isError = false;
      this.userData = data;
    });

    this.dataService.getUserRepoData(this.userName).then((data) => {
      this.repoData = data;
    });
    this.userName = '';
  }

  ngOnInit() {
    this.isLoading = true;
    this.userName = 'Hariettemaina';
    this.userNameLink = this.router.snapshot.paramMap.get('login');

    this.dataService.getUserData(this.userNameLink).then((data) => {
      this.showUserDetails = true;

      if (data.login === 'null') {
        this.getUserData();
        this.userName = '';
        this.isLoading = false;
        return;
      }

      this.userData = data;
      this.dataService.getUserRepoData(this.userNameLink).then((data) => {
        this.repoData = data;
      });
      this.isLoading = false;
      this.userName = '';
    });
  }
}