import { Component, Input } from "@angular/core";

import { Operation } from "../../models/operation.model";


@Component({
    selector: "operation-detail",
    templateUrl: "./operation-detail.component.html",
})

export class OperationDetailComponent {
    @Input() operation;

    onSubmit() {
        console.log("submitted: ", this.operation);
    }
}
