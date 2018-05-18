import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent implements OnInit {

  showSignInFormState: boolean = true;
  showSignUpFormState: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showSignUpForm() {
    this.showSignInFormState = false;
    this.showSignUpFormState = true;
  }

  showSignInForm() {
    this.showSignUpFormState = false;
    this.showSignInFormState = true;
  }

}
