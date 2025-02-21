import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
    EntityState,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
    Article,
    ArticlesSortField,
    ArticleType,
    ArticleView,
} from '@/entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { SortOrder } from '@/shared/types';
import { ArticlePageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../service/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

type ArticlesPageStateSchema = EntityState<Article> & ArticlePageSchema;

const initialState: ArticlesPageStateSchema = {
    ...articlesAdapter.getInitialState(),
    isLoading: false,
    error: undefined,
    hasMore: true,
    page: 1,
    limit: 9,
    view: ArticleView.SMALL,
    order: 'asc',
    sort: ArticlesSortField.CREATED,
    search: '',
    type: ArticleType.ALL,
    _inited: false,
};

export const articlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState,
    reducers: {
        setView: (state, actions: PayloadAction<ArticleView>) => {
            state.view = actions.payload;
            localStorage.setItem(
                ARTICLES_VIEW_LOCALSTORAGE_KEY,
                actions.payload,
            );
        },
        initState: (state: ArticlePageSchema) => {
            const view =
                (localStorage.getItem(
                    ARTICLES_VIEW_LOCALSTORAGE_KEY,
                ) as ArticleView) || ArticleView.SMALL;
            state.view = view;
            state.limit = view === ArticleView.SMALL ? 9 : 4;
            state._inited = true;
        },
        setPage: (state, actions: PayloadAction<number>) => {
            state.page = actions.payload;
        },
        setSort: (state, actions: PayloadAction<ArticlesSortField>) => {
            state.sort = actions.payload;
        },
        setOrder: (state, actions: PayloadAction<SortOrder>) => {
            state.order = actions.payload;
        },
        setSearch: (state, actions: PayloadAction<string>) => {
            state.search = actions.payload;
        },
        setHasMore: (state, action: PayloadAction<boolean>) => {
            state.hasMore = action.payload;
        },
        setType: (state, actions: PayloadAction<ArticleType>) => {
            state.type = actions.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore =
                    Number(action.payload.total) >
                    action.payload.articles.length;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload.articles);
                } else {
                    articlesAdapter.addMany(state, action.payload.articles);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
