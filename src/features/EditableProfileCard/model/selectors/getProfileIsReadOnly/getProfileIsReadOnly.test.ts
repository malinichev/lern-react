import { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileIsReadOnly } from './getProfileIsReadOnly';

describe('getProfileIsReadOnly.test', () => {
    test('should return IsReadOnly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readOnly: true,
            },
        };
        expect(getProfileIsReadOnly(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsReadOnly(state as StateSchema)).toEqual(undefined);
    });
});
