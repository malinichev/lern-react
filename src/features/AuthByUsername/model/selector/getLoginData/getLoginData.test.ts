import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginData } from './getLoginData';

describe('getLoginData.test', () => {
    test('should return userName and password', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                userName: 'User',
                password: '1234',
            },
        };
        expect(getLoginData(state as StateSchema)).toEqual({
            userName: 'User',
            password: '1234',
        });
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginData(state as StateSchema)).toEqual(undefined);
    });
});
