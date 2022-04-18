import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubUserDetailsComponent } from './github-user-details/github-user-details.component';
import { GithubuserRepoDetailsComponent } from './githubuser-repo-details/githubuser-repo-details.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomepageComponent },
  { path: 'searchUser/:login', component: GithubUserDetailsComponent },
  { path: 'searchUser', component: GithubUserDetailsComponent },
  { path: 'searchUserRepositories', component: GithubuserRepoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
