import { Component } from '@angular/core';

import { Account } from '../../models/account.model';
import { AccountService } from '../../shared/services/account.service';


@Component({
    selector: 'accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss'],
    providers: [AccountService]
})

export class AccountsComponent {
    public accounts: Account[];
    public selectedAccount: Account;

    constructor(private _accountService: AccountService) { }

    ngOnInit() {
        this.getOperations();
    }

    onSelect(account: Account) {
        this.selectedAccount = account;
    }

    getOperations() {
        this._accountService.getAll()
            .then(h => this.accounts = h)
            .catch(h => console.warn(h));
    }
}
