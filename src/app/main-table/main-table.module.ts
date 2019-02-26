import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainTableComponent } from './main-table.component';
import { FilterByNome } from './pipes/filter-by-nome.pipe';
import { SearchComponent } from './search/search.componet';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [ MainTableComponent, FilterByNome, SearchComponent ],
    imports: [ CommonModule, HttpClientModule, DarkenOnHoverModule, RouterModule, NgbModule ],
    exports: [ MainTableComponent ]
})
export class TableModule {}