import { EnhancedStore } from '@reduxjs/toolkit/src/configureStore';
import {
    AnyAction,
    CombinedState,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import type { CounterSchema } from '@/entities/Counter';
import type { LoginSchema } from '@/features/AuthByUsername';
import type { UserSchema } from '@/entities/User';

import { ArticleDetailsSchema } from '@/entities/Article';
import { ArticleDetailPageSchema } from '@/pages/ArticlesDetailsPage';
import { CommentType } from '@/features/AddCommentForm';
import { ArticlePageSchema } from '@/pages/ArticlesPage';
import { PageRestoreScrollSchema } from '@/widgets/Page';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileSchema } from '@/features/EditableProfileCard';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    pageRestoreScroll: PageRestoreScrollSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
    // Асинхронные редюсеры
    login?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: CommentType;
    articlesPage?: ArticlePageSchema;
    articleDetailPage?: ArticleDetailPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
