import { PageRestoreScrollSchema } from '../types/pageRestoreScroll';

import { pageRestoreScrollActions, pageRestoreScrollReducer } from './pageRestoreScrollSlice';

describe('pageRestoreScrollSlice.test', () => {
    test('test setPosition', () => {
        const state: DeepPartial<PageRestoreScrollSchema> = {
            scroll: {},
        };
        expect(pageRestoreScrollReducer(
            state as PageRestoreScrollSchema,
            pageRestoreScrollActions.setPosition({ path: 'pathname', position: 400 }),
        )).toEqual({ scroll: { pathname: 400 } });
    });
});
