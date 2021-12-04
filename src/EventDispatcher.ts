import Event from './Event';
import IEventDispatcher from './IEventDispatcher';

interface Listener {
    type: string;
    callback: (event: Event) => void;
}

class EventDispatcher implements IEventDispatcher {
    private _listeners: Listener[];

    constructor() {
        this._listeners = [];
    }

    private _findEvent(
        type: string,
        callback: (event: Event) => void
    ): boolean {
        for (let i = this._listeners.length - 1; i >= 0; i--) {
            if (
                this._listeners[i].type === type &&
                this._listeners[i].callback === callback
            ) {
                return true;
            }
        }

        return false;
    }

    addEventListener(type: string, callback: (event: Event) => void): void {
        if (this._findEvent(type, callback)) return;

        const listener: Listener = {
            type,
            callback,
        };
        this._listeners.push(listener);
    }

    removeEventListener(type: string, callback: (event: Event) => void): void {
        let index = this._listeners.findIndex(
            (listener) =>
                listener.type === type && listener.callback === callback
        );

        while (index !== -1) {
            this._listeners.splice(index, 1);
            index = this._listeners.findIndex(
                (listener) =>
                    listener.type === type && listener.callback === callback
            );
        }
    }

    dispatchEvent(event: Event): boolean {
        let isCalled: boolean = false;
        this._listeners.forEach((listener) => {
            if (listener.type === event.type) {
                isCalled = true;
                listener.callback(event);
            }
        });
        return isCalled;
    }
}

export default EventDispatcher;
