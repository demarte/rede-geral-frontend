import { Localizacao } from './localizacao';

export interface Switch {
    id:number,
    nome:string,
    tipo:string,
    irf:boolean,
    numeroPortas:number,
    localizacao:Localizacao
}

