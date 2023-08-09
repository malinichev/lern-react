import type { Article } from '../types/article';
import type { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from './articleDetailsSlice';

describe('articleDetailsSlice', () => {
    test('test fetchArticleById pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });
    test('test fetchArticleById fulfilled', () => {
        const data:DeepPartial<Article> = {
            id: '1',
            title: 'title',
        };
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data as Article, '1', ''),
        )).toEqual({
            isLoading: false,
            data,
        });
    });
    test('test fetchArticleById rejected', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.rejected,
        )).toEqual({
            isLoading: false,
        });
    });
});
