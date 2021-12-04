class Event {
    private _type: string;

    static CONNECT: string = 'connect';
    static CLOSE: string = 'close';

    constructor(type: string) {
        this._type = type;
    }

    get type(): string {
        return this._type;
    }
}

export default Event;
