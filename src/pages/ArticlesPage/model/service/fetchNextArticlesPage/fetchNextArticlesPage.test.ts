import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
    test('fetch next page', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                limit: 5,
                hasMore: true,
                isLoading: false,
                entities: {},
                ids: [],
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4); // 1-pending, 2-fulfilled, 3-dispatch(articlesPageActions.setPage), 4-dispatch(fetchArticlesList)
        expect(fetchArticlesList).toHaveBeenCalled();
    });
    test('fetchArticlesList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 5,
                limit: 5,
                hasMore: false, // fetchArticlesList not called тк карточек больше нет
                isLoading: false,
                entities: {},
                ids: [],
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2); // 1-pending, 2-fulfilled
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
    test('fetchArticlesList not called with isLoading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 5,
                limit: 5,
                hasMore: true,
                isLoading: true, // fetchArticlesList not called тк isLoading
                entities: {},
                ids: [],
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2); // 1-pending, 2-fulfilled
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
