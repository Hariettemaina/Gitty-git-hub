import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightHoverDirective } from './highlight-hover.directive';
import { DateCountPipe } from './date-count.pipe';
import { GithubUserDetailsComponent } from './github-user-details/github-user-details.component';
import { GithubuserRepoDetailsComponent } from './githubuser-repo-details/githubuser-repo-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component'

@NgModule({
  declarations: [
    AppComponent,
    HighlightHoverDirective,
    DateCountPipe,
    GithubUserDetailsComponent,
    GithubuserRepoDetailsComponent,
    HomepageComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
