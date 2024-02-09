import { StateSchema } from '@/app/providers/StoreProvider';

import { getPageScroll, getPageScrollByPath } from './pageRestoreScroll';

describe('pageRestoreScrollSlice.test', () => {
    test('should return scroll data', () => {
        const state: DeepPartial<StateSchema> = {
            pageRestoreScroll: {
                scroll: {
                    path: 400,
                },
            },
        };
        expect(getPageScroll(state as StateSchema)).toEqual({
            path: 400,
        });
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getPageScroll(state as StateSchema)).toEqual(undefined);
    });

    test('should return scroll position', () => {
        const state: DeepPartial<StateSchema> = {
            pageRestoreScroll: {
                scroll: {
                    pathname: 500,
                },
            },
        };
        expect(getPageScrollByPath(state as StateSchema, 'pathname')).toEqual(
            500,
        );
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getPageScroll(state as StateSchema)).toEqual(undefined);
    });
});
