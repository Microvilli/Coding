import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GithubService} from './services/github.service';
import {UserDataService} from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'coding';
  test = false;
  statements = [
    'Expert',
    'Advanced',
    'Beginner',
    'Hater',
  ];

  myForm: FormGroup;

  profile: any;
  repos: any;

  form = new FormGroup({
    button: new FormControl(''),
  });

  constructor(private gitHubService: GithubService,
              private userDataService: UserDataService) {


    this.initForm();

    this.userDataService.getAllUser().subscribe(data => console.log(data));

    this.userDataService.getUserByName('Michael').subscribe(data => console.log(data));

    this.gitHubService.getProFileInfo().subscribe(profile => {
      // console.log(profile);
      this.profile = profile;
    });

    this.gitHubService.getProfileRepos().subscribe(repos => {
      // console.log(repos);
      this.repos = repos;
    });
  }

  open() {
    this.test = true;
    console.log(this.test);
  }

  onSub() {
    console.log(this.form);
  }

  initForm() {
    this.myForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onRegister() {
    // this.userDataService.deleteUser('Philipp');
    this.userDataService.createUser(this.myForm.value);
  }
}
