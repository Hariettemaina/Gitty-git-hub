import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubuserRepoDetailsComponent } from './githubuser-repo-details.component';

describe('GithubuserRepoDetailsComponent', () => {
  let component: GithubuserRepoDetailsComponent;
  let fixture: ComponentFixture<GithubuserRepoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubuserRepoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubuserRepoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
