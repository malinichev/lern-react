import { StateSchema } from '@/app/providers/StoreProvider';

import {
    getAddCommentFormError,
    getAddCommentFormText,
} from './addCommentFormSelectors';

describe('addCommentFormSelectors.test', () => {
    test('getAddCommentFormError, should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });
    test('getAddCommentFormError should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });

    test('getAddCommentFormText, should return Hellow World!', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'Hellow World!',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual(
            'Hellow World!',
        );
    });
    test('getAddCommentFormText should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });
});
