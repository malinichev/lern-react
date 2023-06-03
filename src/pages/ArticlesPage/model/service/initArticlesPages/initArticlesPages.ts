import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

import { SortOrder } from 'shared/types';
import { ArticlesSortField, ArticleType } from 'entities/Article';
import {
    getArticlesPageInited,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPages = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >('articlesPage/initArticlesPages', async (searchParams, thunkApi) => {
        const { dispatch, getState } = thunkApi;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFromURL = searchParams.get('order') as SortOrder;
            const sortFromURL = searchParams.get('sort') as ArticlesSortField;
            const searchFromURL = searchParams.get('search');
            const typeFromURL = searchParams.get('type') as ArticleType;

            if (orderFromURL) {
                dispatch(articlesPageActions.setOrder(orderFromURL));
            }

            if (sortFromURL) {
                dispatch(articlesPageActions.setSort(sortFromURL));
            }

            if (searchFromURL) {
                dispatch(articlesPageActions.setSearch(searchFromURL));
            }

            if (typeFromURL) {
                dispatch(articlesPageActions.setType(typeFromURL));
            }

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    });
