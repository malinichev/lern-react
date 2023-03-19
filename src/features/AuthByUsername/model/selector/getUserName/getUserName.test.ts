import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { getUserName } from './getUserName';

describe('getUserName.test', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                userName: 'admin',
            },
        };
        expect(getUserName(state as StateSchema)).toEqual('admin');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getUserName(state as StateSchema)).toEqual('');
    });
});
