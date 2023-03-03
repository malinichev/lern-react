import {
    counterAction, counterReducer, CounterSchema,
} from 'entities/Counter';

describe('CounterSlice', () => {
    test('Test CounterSlice increment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterAction.increment())).toEqual({
            value: 11,
        });
    });
    test('Test CounterSlice decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterAction.decrement())).toEqual({
            value: 9,
        });
    });

    test('Test CounterSlice undefined state', () => {
        expect(counterReducer(undefined, counterAction.decrement())).toEqual({
            value: -1,
        });
    });
});
