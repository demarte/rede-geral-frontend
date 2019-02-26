import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Switch } from 'src/app/models/switch';
import { SwitchService } from 'src/app/core/services/switch.service';
import { Vlan } from 'src/app/models/vlan';
import { VlanService } from 'src/app/core/services/vlan.service';
import { ConnectionService } from 'src/app/core/services/connection.service';
import { IpNotTakenValidator } from './ip-not-taken.validador.service';
import { FormConnectionService } from './form-connection.service';


@Component({

    templateUrl : './form-connection.component.html'
})
export class FormConnection implements OnInit{
    
    connectionForm: FormGroup;
    switchs$: Observable<Switch[]>;
    vlans$: Observable<Vlan[]>;
    portas$: Observable<String[]>;
    tipos = ['acesso', 'hybrid'];
    interfaces = ['GE', 'XGE (10G)', 'XGE base-T', 'FGE (40G)'];
    idSwitch: number;
    
    constructor(
        private formBuilder: FormBuilder,
        private switchService: SwitchService,
        private connectionService: ConnectionService,
        private vlanService: VlanService,
        private ipNotTakenValidatorService: IpNotTakenValidator,
        private formConnectionService: FormConnectionService,
        private router: Router) {}
    
    ngOnInit(): void {
     
        this.getSwitchs();
        this.getVlans();
        
        this.connectionForm = this.formBuilder.group({
            nome : ['',
                [
                    Validators.required,
                    Validators.maxLength(50)  
                ] 
            ],
            ip : ['', 
                [
                    Validators.required,
                    Validators.pattern(/^([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])$/)
                ],
                    this.ipNotTakenValidatorService.checkIpTaken()
            ],
            sw : ['',
                 Validators.required
            ],
            porta : ['',
                Validators.required 
            ],
            interfaceDeRede : [this.interfaces[0],
                Validators.required 
            ],
            login : [''],
            senha : [''],
            tipo : [this.tipos[0],
                Validators.required 
            ],
            untags : [''],
            tags : [''],
            monitoravel : [false],
        });
        
    }
    
    getSwitchs() {
        
        this.switchs$ = this.switchService.getSwitchs()          
    }

    getPortas(id) {

        this.portas$ = this.connectionService.getAvailablePorts(id);       
    }

    getVlans() {
        
        this.vlans$ = this.vlanService.getVlans()
    }

    buildConnection() {

        const untag = this.connectionForm.get('untags').value;
        const data = ({
            "porta" : this.connectionForm.get('porta').value,
            "tipo" : this.connectionForm.get('tipo').value,
            "interfaceDeRede" : this.connectionForm.get('interfaceDeRede').value,
            "equipamento" : {
                "nome" : this.connectionForm.get('nome').value,
                "ip" : this.connectionForm.get('ip').value,
                "login" : this.connectionForm.get('login').value,
                "senha" : this.connectionForm.get('senha').value,
                "monitoravel" : this.connectionForm.get('monitoravel').value
            },
            "sw" : {
                "id" : this.connectionForm.get('sw').value
            },
            "untags" : untag ? [{
                    "id" : untag
                }] : [],
            "tags" : []
            });

            return data;
    }
    
    addConnection() {
        this.formConnectionService
            .saveConnection(this.buildConnection())
            .subscribe(() => this.router.navigate(['connection', 'switch', this.connectionForm.get('sw').value]));   
    }
}