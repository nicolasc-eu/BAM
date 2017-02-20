import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PersonService } from '../../shared/services/person.service';
import { Person } from '../../models/person.model';
import { Account } from '../../models/account.model';


@Component({
    selector: 'person-detail',
    templateUrl: './person-detail.component.html'
})

export class PersonDetailComponent {
    public person: Person = null;

    constructor(
        private _personService: PersonService,
        private _router: Router,
        private _route: ActivatedRoute
    ) { }

    ngOnInit() {
        this._route.params
            .map(params => +params['id'])
            .subscribe((id) => {
                this._personService.getCurrentPerson()
                    .then(function(person) {
                        if (person.id === id) {
                            this.person = person;
                        }
                    }.bind(this))
                    .catch(function(err) {
                        console.error(err);
                        this._router.navigate(['/login']);
                    });
            });
    }

    onSelect(account: Account) {
        this._router.navigate(['/operations', account.id]);
    }
}
