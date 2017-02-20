import { Component } from '@angular/core';

import { EventService } from '../../shared/services/event.service';


@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html'
})

export class ToolbarComponent {
    constructor(private _eventService: EventService) { }

    newOperation() {
        this._eventService.emit('newOperation');
    }
}
