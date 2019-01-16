import { Pipe, PipeTransform } from '@angular/core';
import { Connection } from 'src/app/models/connection';

@Pipe({ name: 'filterByNome' })
export class FilterByNome implements PipeTransform{

    transform(data: Connection[], 
              descriptionQueryNome: string, 
              descriptionQueryIp: string,
              descriptionQuerySwitch: string) : Connection[]{
        
        if(descriptionQueryNome) {

            this.transformQuery(descriptionQueryNome);    
            return data.filter(connection => 
                connection.equipamento.nome.toLowerCase().includes(descriptionQueryNome));
            }
        if(descriptionQueryIp) {
    
            this.transformQuery(descriptionQueryIp);
            return data.filter(connection => 
                connection.equipamento.ip.toLowerCase().includes(descriptionQueryIp));
        }
        if(descriptionQuerySwitch) {
    
            this.transformQuery(descriptionQuerySwitch);
            return data.filter(connection => 
                connection.sw.nome.toLowerCase().includes(descriptionQuerySwitch));
        }
        else {
            return data;
        }
    }

    transformQuery(query: string) : string{

        return query.trim().toLowerCase();
    }
}