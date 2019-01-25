import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 
import { Connection } from '../models/connection';

@Component({
    selector: 'app-main-table',
    templateUrl: 'main-table.component.html',
    styleUrls: ['main-table.component.css']
})
export class MainTableComponent implements OnInit {
    
    filterNome: string = '';
    filterIp: string = '';
    filterSwitch: string = '';
    data: Connection[] = [];
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private route: Router) {}
    
    ngOnInit(): void {
       
        this.data = this.activatedRoute.snapshot.data.data.content; 
    }

    navigateToSwitch(id) {

        this.route.navigate(['connection','switch', id]) 
    } 
}