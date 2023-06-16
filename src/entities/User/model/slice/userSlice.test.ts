import { User, UserSchema } from '../types/user';
import { userActions, userReducer } from './userSlice';

const data:User = {
    id: '1',
    username: 'Sergey',
    avatar: 'url',
};

describe('userSlice.test', () => {
    test('test setAuthData, authData should be User', () => {
        const state: DeepPartial<UserSchema> = {};

        expect(userReducer(
            state as UserSchema,
            userActions.setAuthData(data),
        )).toEqual({ authData: data });
    });

    test('test initAuthData, _initAuth should be true', () => {
        const state: DeepPartial<UserSchema> = {
            _initAuth: false,
        };

        expect(userReducer(
            state as UserSchema,
            userActions.initAuthData(),
        )).toEqual({ _initAuth: true });
    });

    test('test logout, authData should be undefined', () => {
        const state: DeepPartial<UserSchema> = {
            authData: {
                id: '1',
            },
        };

        expect(userReducer(
            state as UserSchema,
            userActions.logout(),
        )).toEqual({ authData: undefined });
    });
});
