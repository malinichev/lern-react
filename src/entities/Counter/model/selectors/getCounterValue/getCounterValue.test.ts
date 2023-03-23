import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from 'entities/Counter';

describe('getCounterValue', () => {
    test('Test getCounterValue', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
