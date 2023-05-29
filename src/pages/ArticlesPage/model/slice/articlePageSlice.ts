import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ArticlePageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../service/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

export const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
        view: ArticleView.SMALL,
        ids: [],
        entities: {},
        hasMore: true,
        page: 1,
        _inited: false,
    }),
    reducers: {
        setView: (state, actions: PayloadAction<ArticleView>) => {
            state.view = actions.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, actions.payload);
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView || ArticleView.SMALL;
            state.view = view;
            state.limit = view === ArticleView.SMALL ? 9 : 4;
            state._inited = true;
        },
        setPage: (state, actions: PayloadAction<number>) => {
            state.page = actions.payload;
        },
        setHasMore: (state, actions: PayloadAction<boolean>) => {
            state.hasMore = actions.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticlesList.fulfilled, (
                state,
                action: PayloadAction<Article[]>,
            ) => {
                state.isLoading = false;
                articlesAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: articlesPageActions } = articlePageSlice;
export const { reducer: articlesPageReducer } = articlePageSlice;
