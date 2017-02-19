import { Account } from "./account.model";

export class Person {
    id: number;
    name: string;
    accounts: Account[];
    accounts_ids: number[];
    secret: string;
}
