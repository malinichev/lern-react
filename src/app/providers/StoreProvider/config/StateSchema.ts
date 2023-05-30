import type { CounterSchema } from 'entities/Counter';
import type { LoginSchema } from 'features/AuthByUsername';
import type { UserSchema } from 'entities/User';
import { EnhancedStore } from '@reduxjs/toolkit/src/configureStore';
import {
    AnyAction,
    CombinedState,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsCommentsSchema } from 'pages/ArticlesDetailsPage';
import { CommentType } from 'features/AddCommentForm';
import { ArticlePageSchema } from 'pages/ArticlesPage';
import { PageRestoreScrollSchema } from 'widgets/Page';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  pageRestoreScroll: PageRestoreScrollSchema;

  // Асинхронные редюсеры
  login?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: CommentType;
  articlesPage?: ArticlePageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
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
