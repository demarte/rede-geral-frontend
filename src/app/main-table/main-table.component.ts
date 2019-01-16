import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
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
    size: number;
    
    constructor( private activatedRoute: ActivatedRoute ) {}
    
    ngOnInit(): void {
        
        this.data = this.activatedRoute.snapshot.data.data.content;
        this.size = this.activatedRoute.snapshot.data.data.size;  
     
    }
    
}