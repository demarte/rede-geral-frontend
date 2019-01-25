import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

import { FormConnectionService } from './form-connection.service';

@Injectable({
    providedIn : 'root'
})
export class IpNotTakenValidator {

    constructor(private formConnectionService: FormConnectionService) {}

    checkIpTaken() {

        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(ip => 
                        this.formConnectionService.checkIpTaken(ip)
                    ))
                    .pipe(map(isTaken => isTaken ? { ip : true} : null))
                    .pipe(first());
        }
    }
}