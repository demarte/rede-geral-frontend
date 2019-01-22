import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Switch } from 'src/app/models/switch';
import { SwitchService } from 'src/app/core/switch/switch.service';
import { Vlan } from 'src/app/models/vlan';
import { VlanService } from 'src/app/core/vlan/vlan.service';

@Component({

    templateUrl : './form-connection.component.html'
})
export class FormConnection implements OnInit{
    
    connectionForm: FormGroup;
    switchs: Switch[];
    vlans: Vlan[];
    tipos = ['acesso', 'hybrid'];
    interfaces = ['GE', 'XGE (10G)', 'XGE base-T', 'FGE (40G)'];

    
    constructor(
        private formBuilder: FormBuilder,
        private switchService: SwitchService,
        private vlanService: VlanService) {}
    
    ngOnInit(): void {
     
        this.getSwitchs();
        this.getVlans();
        
        this.connectionForm = this.formBuilder.group({
            name : ['', Validators.required],
            ip : ['', Validators.required],
            sw : [''],
            porta : [''],
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
        
        this.switchService
            .getSwitchs()
            .subscribe(switchs => this.switchs = switchs);  
    }

    getVlans() {
        
        this.vlanService
            .getVlans()
            .subscribe(vlans => this.vlans = vlans);  
    }

    addConnection() {
        console.log('adicionar conexão');
        
    }


}