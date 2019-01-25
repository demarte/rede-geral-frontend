import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Switch } from 'src/app/models/switch';
import { SwitchService } from 'src/app/core/services/switch.service';
import { Vlan } from 'src/app/models/vlan';
import { VlanService } from 'src/app/core/services/vlan.service';
import { ConnectionService } from 'src/app/core/services/connection.service';
import { IpNotTakenValidator } from './ip-not-taken.validador.service';

@Component({

    templateUrl : './form-connection.component.html'
})
export class FormConnection implements OnInit{
    
    connectionForm: FormGroup;
    switchs$: Observable<Switch[]>;
    vlans$: Observable<Vlan[]>;
    portas$: Observable<String[]>;
    selectedSwitch: Switch;
    tipos = ['acesso', 'hybrid'];
    interfaces = ['GE', 'XGE (10G)', 'XGE base-T', 'FGE (40G)'];
    

    
    constructor(
        private formBuilder: FormBuilder,
        private switchService: SwitchService,
        private connectionService: ConnectionService,
        private vlanService: VlanService,
        private ipNotTakenValidatorService: IpNotTakenValidator) {}
    
    ngOnInit(): void {
     
        this.getSwitchs();
        this.getVlans();
        
        this.connectionForm = this.formBuilder.group({
            name : ['',
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
            interface : [''],
            login : [''],
            senha : [''],
            tipo : [''],
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

    addConnection() {
          
    }

}