import Event from './Event';

interface IEventDispatcher {
    addEventListener(type: string, callback: (event: Event) => void): void;
    removeEventListener(type: string, callback: (event: Event) => void): void;
    dispatchEvent(event: Event): boolean;
}

export default IEventDispatcher;
