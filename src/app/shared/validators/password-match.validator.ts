import { AbstractControl } from '@angular/forms';

export class PasswordMatchValidator {

    static matchPassword(control: AbstractControl) {

        let password = control.get('senha').value;
        let confirmPassword = control.get('confirmPassword').value; 

         return (password != confirmPassword) ? control.get('confirmPassword').setErrors({MatchPassword: true}) : null
         
     }
}