import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from './user';
import { ValidateUrl } from './validators/ValidateUrl';
import { validateFullName } from './validators/ValidateFullName';
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']

})
export class UserComponent implements OnChanges, OnInit {
    registerForm: FormGroup;
    @Input() counterValue = 5;
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = [];
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.submitted = false;

        this.registerForm = this.formBuilder.group({
            firstname: ['', [Validators.required]],//<any>Validators.minLength(5)
            lastname: ['', [Validators.required]],
            fullname: ['', [validateFullName]],
            numberOfRoles: [this.counterValue],
            url: ['', [ValidateUrl]],

            email: ['', [Validators.required, Validators.email]]
            // address: this.formBuilder.group({
            //     street: [],
            //     zip: [],
            //     city: []
            // })
        });

        //this.subcribeToFormChanges();
    }

    ngOnChanges(changes: SimpleChanges) {
        const name: SimpleChange = changes.name;
        //counterValue
        console.log('prev value: ', name.previousValue);
        console.log('got name: ', name.currentValue);

    }

    updateUrl() {
        // (<FormControl>this.registerForm.controls['name'])
        //(<FormControl>this.registerForm.controls.url).setValue('http://baron.com', { onlySelf: true });
        this.registerForm.patchValue({ url: 'http://baron.com',numberOfRoles: this.counterValue})
    }

    save(model: User, isValid: boolean) {
        this.submitted = true; // set form submit to true

        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
    }

    subcribeToFormChanges() {
        // initialize stream
        const myFormValueChanges$ = this.registerForm.valueChanges;

        // subscribe to the stream 
        myFormValueChanges$.subscribe(x => this.events
            .push({ event: 'STATUS CHANGED', object: x }));
    }
}
