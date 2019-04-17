import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

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

  form = new FormGroup({
    button: new FormControl(''),
  });

  constructor() {
  }

  onSub() {
    console.log(this.form);
  }
}
