import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../services/user/user';
import { UserService } from '../services/user/user.service';


@Component({
    selector : 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit{
    
    user$: Observable<User>;

    constructor(private userService: UserService) {}
    
    ngOnInit(): void {
        
        this.user$ = this.userService.getUser();
    }


}