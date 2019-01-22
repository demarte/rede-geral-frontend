import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { PasswordMatchValidator } from 'src/app/shared/validators/password-match.validator';
import { SignUpService } from './signup.service';
import { User } from 'src/app/models/user';
import { PlatformDetector } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    providers: [UserNotTakenValidatorService]
})
export class SignUpComponent implements OnInit {

    signUpForm: FormGroup;
    @ViewChild('loginInput') loginInput: ElementRef<HTMLInputElement> 

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router: Router,
        private platformService: PlatformDetector) {}
    
    ngOnInit(): void {

        this.signUpForm = this.formBuilder.group({
            login: ['',
            [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(30),
                Validators.pattern(/^[a-z0-9_\-]+$/)
            ],
            this.userNotTakenValidatorService.checkUserNameTaken()
            
        ],
            senha: ['', 
            [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(30),
            ]
        ],
            confirmPassword: ['', 
            [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(30),
            ]
        ]
        }, { validator : PasswordMatchValidator.matchPassword });   

        this.platformService.isPlatformBrowser() &&  
            this.loginInput.nativeElement.focus();
    }

    signUp() {

        const newUser = this.signUpForm.getRawValue() as User
        this.signUpService
            .signup(newUser)
            .subscribe(() => this.router.navigate(['']));
    }

}