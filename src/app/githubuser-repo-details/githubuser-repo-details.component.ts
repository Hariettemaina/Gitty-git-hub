import { Component, OnInit } from '@angular/core';
import { GithubDataService } from '../github-data.service';
import { Repository } from '../repository';
@Component({
  selector: 'app-githubuser-repo-details',
  templateUrl: './githubuser-repo-details.component.html',
  styleUrls: ['./githubuser-repo-details.component.css']
})
export class GithubuserRepoDetailsComponent implements OnInit {

  searchTerm: string = '';
  isError: boolean = false;
  isDataError: boolean = false;
  repoData!: Repository[];
  arrayData: any;
  isLoading: boolean = false;
  constructor(private dataService: GithubDataService) {}

  ngOnInit(): void {
    this.searchTerm = 'Hariettemaina'
  }

  getUserData() {
    this.isLoading = true;
    this.isError = false;
    this.isDataError = false;

    if (this.searchTerm === '') {
      this.isLoading = false;
      this.isError = true;
      return;
    }

    this.isLoading = true;

    this.dataService.getRepoData(this.searchTerm).then((data) => {
      this.isLoading = false;
      this.arrayData = Object.entries(data);
      let repositoryData = this.arrayData[2];

      let convertRepositoryData =
        repositoryData[Object.keys(repositoryData)[1]];

      if (convertRepositoryData.length == 0) {
        this.isDataError = true;
        return;
      }
      this.repoData = convertRepositoryData;
    });
    this.searchTerm = '';
  }
}
