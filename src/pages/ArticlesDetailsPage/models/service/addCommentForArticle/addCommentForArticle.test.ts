import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { addCommentForArticle } from 'pages/ArticlesDetailsPage/models/service/addCommentForArticle/addCommentForArticle';

const data = {
    articleId: '1',
    userId: '1',
    text: 'Hellow',
    id: '8_RxmVZ',
};

describe('addCommentForArticle.test', () => {
    test('sendComment success', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData: {
                    id: data.userId,
                },
            },
            articleDetails: {
                data: {
                    id: data.articleId,
                },
            },
        });

        thunk.api.post.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(data.text);

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('sendComment error !authData ', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            articleDetails: {
                data: {
                    id: data.articleId,
                },
            },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk(data.text);

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('No data');
    });
    test('sendComment error !article ', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData: {
                    id: data.userId,
                },
            },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk(data.text);

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('No data');
    });
    test('sendComment error !text ', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            articleDetails: {
                data: {
                    id: data.articleId,
                },
            },
            user: {
                authData: {
                    id: data.userId,
                },
            },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('');

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('No data');
    });
});
