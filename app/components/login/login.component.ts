import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PersonService } from '../../shared/services/person.service';


@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    private secret: string = '';

    constructor(
        private _router: Router,
        private _personService: PersonService
    ) { }

    onSubmit() {
        this._personService.login(this.secret)
            .then(function(person) {
                this._router.navigate(['/me', person.id]);
            }.bind(this))
            .catch(function(err) {
                console.error(err);
                this.secret = '';
            }.bind(this));
    }
}
