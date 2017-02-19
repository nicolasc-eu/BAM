import { Injectable } from "@angular/core";

import { OPERATIONS } from "../../shared/mock/operations.mock";
import { Operation } from "../../models/operation.model";
import { Account } from "../../models/account.model";

@Injectable()

export class OperationService {
    getAll() {
        return new Promise<Operation[]>(res => res(OPERATIONS));
    }

    getOne(id) {
        return new Promise<Operation>(res => res(OPERATIONS[id]));
    }

    getAllForAccount(account: Account) {
        return new Promise<Operation[]>(res => res(OPERATIONS.filter(function(o) {
            return o.account_id === account.id;
        })));
    }

    getNew() {
        let op = new Operation();
        op.date = new Date();
        return new Promise<Operation>(r => r(op));
    }
}
