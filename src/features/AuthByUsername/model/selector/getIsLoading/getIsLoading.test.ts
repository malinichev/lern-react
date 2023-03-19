import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { getIsLoading } from './getIsLoading';

describe('getIsLoading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: true,
            },
        };
        expect(getIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should return false', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: false,
            },
        };
        expect(getIsLoading(state as StateSchema)).toEqual(false);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
