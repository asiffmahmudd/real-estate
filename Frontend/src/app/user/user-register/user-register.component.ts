import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup

  constructor(

  ){}

  ngOnInit(){
    this.registrationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), ]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    }, this.matchingPasswords);
  }

  // passwordMatchingValidator(fg: FormGroup): Validators{
  //   return fg.get('password')?.value === fg.get('confirmPassword')?.value ? true : {notMatched: true};
  // }

  public matchingPasswords(c: AbstractControl): ValidationErrors | null {
    const password = c.get(['password']);
    const confirmPassword = c.get(['confirmPassword']);

    if (password?.value !== confirmPassword?.value) {
      return { mismatchedPasswords: true };
    }
    return null;
  }

  onSubmit(){
    console.log(this.registrationForm);
  }
}
