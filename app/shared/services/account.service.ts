import { Injectable } from '@angular/core';

import { ACCOUNTS } from '../../shared/mock/accounts.mock';
import { Account } from '../../models/account.model';


@Injectable()

export class AccountService {
    getAll() {
        return new Promise<Account[]>(res => res(ACCOUNTS));
    }

    getAccountsForIds(ids: number[]) {
        return new Promise<Account[]>(function(res) {
            let acc: Account[] = [];
            ACCOUNTS.forEach(function(a) {
                if (ids.indexOf(a.id) > -1) {
                    acc.push(a);
                }
            });
            res(acc);
        });
    }

    getOne(id) {
        return new Promise<Account>(res => res(ACCOUNTS[id]));
    }
}
