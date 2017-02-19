import { Operation } from "../../models/operation.model";

export var OPERATIONS: Operation[] = [
    {
        id: 0,
        date: new Date(),
        name: "Mock 0",
        comment: "Mock comment for op. 0",
        amount: 42.1,
        checked: false,
        account_id: 0
    },
    {
        id: 1,
        date: new Date(),
        name: "Mock 1",
        comment: "Mock comment for op. 1",
        amount: 12.21,
        checked: true,
        account_id: 1
    },
    {
        id: 2,
        date: new Date(),
        name: "Mock 2",
        comment: "Mock comment for op. 2",
        amount: 34.34,
        checked: false,
        account_id: 0
    },
    {
        id: 3,
        date: new Date(),
        name: "Mock 3",
        comment: "Mock comment for op. 3",
        amount: 66,
        checked: false,
        account_id: 1
    },
    {
        id: 4,
        date: new Date(),
        name: "Mock 4",
        comment: "Mock comment for op. 4",
        amount: 12,
        checked: true,
        account_id: 0
    }
];
