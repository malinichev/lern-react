import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { Article } from 'entities/Article';

export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
    >(
        'articleDetails/fetchArticleById',
        async (articleId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
                const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                    headers: {
                        authorization,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
