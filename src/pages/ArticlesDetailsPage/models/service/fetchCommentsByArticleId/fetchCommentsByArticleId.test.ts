import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import {
    fetchCommentsByArticleId,
} from './fetchCommentsByArticleId';

const data = [{
    articleId: '1',
    userId: '1',
    text: 'Привет',
    id: 'fp8eVJc',
},
{
    articleId: '1',
    userId: '1',
    text: 'Привет 2',
    id: 'EPkien0',
}];

describe('fetchCommentsByArticleId.test', () => {
    test('fetchComments success', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('fetchCommentsByArticleId error !articleId ', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('');

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
