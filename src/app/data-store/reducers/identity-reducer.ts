import {Action} from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const TWO = 'TWO';
export const THREE = 'THREE';

export function counterReducer(counter:number = 0, action: Action): number {
    switch (action.type) {
        case INCREMENT:
            return counter + 1;

        case DECREMENT:
            return counter - 1;

        default:
            return counter;
    }
}

export function multiplyReducer(another:number = 0,action:Action):number{
    switch (action.type) {
        case TWO:
            return another + 5;

        case THREE:
            return another + 20;

        default:
            return another;
    }
}
