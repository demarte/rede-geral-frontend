import { Equipamento } from './equipamento';
import { Switch } from './switch';
import { Vlan } from './vlan';

export interface Connection {
    id:number,
    porta:string,
    tipo:string,
    interfaceDeRede:string,
    equipamento: Equipamento,
    sw: Switch,
    untags: Vlan[],
    tags: Vlan[]
}