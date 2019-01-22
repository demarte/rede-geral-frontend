import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { MainTableComponent } from './main-table.component';
import {DataTableModule} from 'angular-6-datatable';
import { FilterByNome } from './pipes/filter-by-nome.pipe';
import { SearchComponent } from './search/search.componet';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [ MainTableComponent, FilterByNome, SearchComponent ],
    imports: [ CommonModule, DataTableModule, HttpClientModule, DarkenOnHoverModule, RouterModule ],
    exports: [ MainTableComponent ]
})
export class TableModule {}