import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';

import { getArticleDetailsData } from '@/entities/Article';
import { CommentType } from '@/features/AddCommentForm';

import {
    fetchCommentsByArticleId,
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<CommentType, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkApi) => {
        const {
            extra, rejectWithValue, dispatch, getState,
        } = thunkApi;

        const userData = getUserAuthData(getState());

        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('No data');
        }

        try {
            const response = await extra.api.post<CommentType>('/comments', {
                articleId: article?.id,
                userId: userData?.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article?.id));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
