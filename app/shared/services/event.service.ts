import { EventEmitter, Injectable } from '@angular/core';


class Emitter {
    [index: string]: EventEmitter<any>;
}

@Injectable()

export class EventService {
    private _emitters: Emitter = new Emitter();

    createEmitter(key: string) {
        this._emitters[key] = new EventEmitter();
        return this._emitters[key];
    }

    emit(key: string, payload: any = null) {
        if (this._emitters[key]) {
            this._emitters[key].emit(payload);
        }
    }
}
