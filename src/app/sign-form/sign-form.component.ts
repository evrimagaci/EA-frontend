import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent implements OnInit {

  showSignInFormState: boolean = true;
  showSignUpFormState: boolean = false;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(`Evrim Ağacı - ${this.showSignInForm ? 'Giriş Yap' : 'Kaydol'}`);
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
