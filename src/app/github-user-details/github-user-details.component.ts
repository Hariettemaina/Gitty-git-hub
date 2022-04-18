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

  constructor() { }

  ngOnInit(): void {
  }

}
