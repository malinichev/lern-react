import { Country, Currency } from 'shared/const/common';
import { ValidateProfileErrors, ProfileSchema } from '../types/profile';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';
import { fetchProfileData } from '../service/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    id: '1',
    firstname: 'Sergey',
    lastname: 'Malinichev',
    age: 39,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Irk',
    username: 'malin',

};

describe('profileSlice.test', () => {
    test('test setReadOnly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readOnly: false,
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadOnly(true),
        )).toEqual({ readOnly: true });
    });

    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: 'sdfsdfdsf' },
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readOnly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });

    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: '123' },
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ username: '123456' }),
        )).toEqual({
            form: { username: '123456' },
        });
    });

    test('test fetchProfileData pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileErrors.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileSchema,
            fetchProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('test fetchProfileData fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
        };
        expect(profileReducer(
            state as ProfileSchema,
            fetchProfileData.fulfilled(data, '1', ''),
        )).toEqual({
            isLoading: false,
            form: data,
            data,
        });
    });

    test('test fetchProfileData rejected', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileSchema,
            fetchProfileData.rejected,
        )).toEqual({
            isLoading: false,
        });
    });

    test('test updateProfileData pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileErrors.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test('test updateProfileData fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readOnly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });

    test('test updateProfileData rejected', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.rejected,
        )).toEqual({
            isLoading: false,
        });
    });

    // test('test fetchProfileData rejected', () => {
    //     const state: DeepPartial<ProfileSchema> = {
    //         isLoading: true,
    //     };
    //     expect(profileReducer(
    //         state as ProfileSchema,
    //         fetchProfileData.rejected,
    //     )).toEqual({
    //         isLoading: false,
    //         error: 'error',
    //     });
    // });
    // test('test set password', () => {
    //     const state: DeepPartial<LoginSchema> = {
    //         password: '123',
    //     };
    //     expect(loginReducer(
    //         state as LoginSchema,
    //         loginAction.setPassword('123456'),
    //     )).toEqual({ password: '123456' });
    // });
    // test('test set isLoad', () => {
    //     const state: DeepPartial<LoginSchema> = {};
    //     expect(loginReducer(
    //         state as LoginSchema,
    //         loginByUserName.pending,
    //     )).toEqual({
    //         isLoading: true,
    //     });
    // });
});
