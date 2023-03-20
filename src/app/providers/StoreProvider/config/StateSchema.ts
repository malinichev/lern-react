import type { CounterSchema } from 'entities/Counter';
import type { LoginSchema } from 'features/AuthByUsername';
import type { UserSchema } from 'entities/User';
import { EnhancedStore } from '@reduxjs/toolkit/src/configureStore';
import {
    AnyAction, CombinedState, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // Асинхронные редюсеры
    login?: LoginSchema
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManagerType {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key:StateSchemaKey, reducer:Reducer) => void
    remove: (key:StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager:ReducerManagerType
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate: NavigateFunction
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
}
