import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
import { Connection } from '../models/connection';
import { ConnectionService } from '../core/services/connection.service';

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
    totalElements: number;
    size: number;
    page: number;
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private connectionService: ConnectionService) {}
    
    ngOnInit(): void {
       
        this.data = this.activatedRoute.snapshot.data.data.content; 
        this.totalElements = this.activatedRoute.snapshot.data.data.totalElements;
        this.size = this.activatedRoute.snapshot.data.data.size;
    }

    pageChange() {
        
        this.connectionService
            .listConnectionsPaginated(this.page-1)
            .subscribe(data => {
                this.data = data.content;
                this.size = data.size;
                this.totalElements = data.totalElements;
            });
       
        
    }
}