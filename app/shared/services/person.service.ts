import { Injectable } from "@angular/core";

import { PERSONS } from "../../shared/mock/persons.mock";
import { Person } from "../../models/person.model";
import { AccountService } from "./account.service";

@Injectable()

export class PersonService {
    private currentPerson: Person = null;

    constructor(
        private _accountService: AccountService
    ) { }

    login(secret: string) {
        return new Promise(function(res, rej) {
            let p: Person[] = PERSONS.filter(p => p.secret === secret);

            // [NC] TODO: refacto
            if (p.length > 0) {
                this.currentPerson = p[0];
                this._populate(this.currentPerson);
                res(this.currentPerson);
            } else {
                rej("UserNotFound");
            }
        }.bind(this));
    }

    getCurrentPerson() {
        return new Promise<Person>(function(res, rej) {
            if (this.currentPerson) {
                res(this.currentPerson);
            } else {
                rej("NotLoggedIn");
            }
        }.bind(this));
    }

    getAll() {
        return new Promise<Person[]>(res => res(PERSONS));
    }

    getOne(id) {
        return new Promise<Person>(res => res(PERSONS[id]));
    }

    _populate(person: Person) {
        this._accountService.getAccountsForIds(person.accounts_ids)
            .then(a => person.accounts = a);
    }
}
