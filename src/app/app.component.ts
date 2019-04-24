import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {GithubService} from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'coding';
  statements = [
    'Expert',
    'Advanced',
    'Beginner',
    'Hater',
  ];

  profile: any;
  repos: any;

  form = new FormGroup({
    button: new FormControl(''),
  });

  constructor(private gitHubService: GithubService) {
    this.gitHubService.getProFileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.gitHubService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  onSub() {
    console.log(this.form);
  }
}
