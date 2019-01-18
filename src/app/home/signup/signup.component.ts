import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {

    signUpForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder) {}
    
    ngOnInit(): void {

        this.signUpForm = this.formBuilder.group({
            login: ['',
            [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(30),
                Validators.pattern(/^[a-z0-9_\-]+$/)
            ]
        ],
            password: ['', 
            [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(30)
            ]
        ],
            confirmPassword: ['', 
            [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(30)
            ]
        ]
        });
        
    }
}