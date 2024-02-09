import { StateSchema } from '@/app/providers/StoreProvider';

import { User } from '../../types/user';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData.test', () => {
    test('should return User data', () => {
        const data: User = {
            id: '1',
            username: 'Sergey',
            avatar: 'url',
        };
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: data,
            },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
    });
});
