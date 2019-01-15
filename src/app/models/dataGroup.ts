import { Connection } from './connection';

export interface DataGroup {
    content:Connection[],
    totalElements:number,
    totalPages:number,
    last: boolean,
    size: number,
}