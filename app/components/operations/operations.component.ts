import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Operation } from '../../models/operation.model';
import { Account } from '../../models/account.model';
import { OperationService } from '../../shared/services/operation.service';
import { AccountService } from '../../shared/services/account.service';
import { EventService } from '../../shared/services/event.service';


@Component({
    selector: 'operations',
    templateUrl: './operations.component.html',
    styleUrls: ['./operations.component.scss'],
    providers: [OperationService]
})

export class OperationsComponent {
    public operations: Operation[];
    public selectedOperation: Operation;
    public selectedAccountId: number;
    public currentAccount: Account = null;

    constructor(
        private _operationService: OperationService,
        private _accountService: AccountService,
        private _eventService: EventService,
        private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this._route.params
            .map(params => +params['id'])
            .subscribe((id) => {
                this._eventService.createEmitter('newOperation')
                    .subscribe(i => this.newOperation(i));

                this._accountService.getOne(id)
                    .then(function(account) {
                        this.currentAccount = account;
                        this._operationService.getAllForAccount(this.currentAccount)
                            .then(ops => this.operations = ops);
                    }.bind(this));
            });
    }

    onSelect(operation: Operation) {
        this.selectedOperation = operation;
    }

    newOperation(a) {
        this._operationService.getNew().then(o => this.selectedOperation = o);
    }
}
