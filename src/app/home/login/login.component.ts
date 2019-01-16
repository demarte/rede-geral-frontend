import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>; 

  constructor(private formBuilder : FormBuilder,
              private authService : AuthService,
              private router : Router) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
          userName : ['', Validators.required],
          password : ['', Validators.required]
    });
  }

  login() {
     
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
        .authenticate(userName, password)
        .subscribe( 
          () => this.router.navigate(['connection']),     
          err => {     
            console.log(err); 
            this.loginForm.reset();
            this.userNameInput.nativeElement.focus();
            alert('Usuário ou senha inválidos');   
        })
      
  }
}
