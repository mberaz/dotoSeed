import {User} from '../users/user';
import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-condition',
    templateUrl: './condition.component.html',
})
export class ConditionComponent{

    user:User=null;

    setuser(){
        this.user=new User(1,'michael','berezin','mmm@gmail.com');
    }
}