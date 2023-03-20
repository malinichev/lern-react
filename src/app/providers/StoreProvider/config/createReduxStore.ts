import {
    configureStore, ReducersMapObject,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userReducer } from 'entities/User';
import { counterReducer } from 'entities/Counter';
import { createReducerManager } from 'app/providers/StoreProvider/config/createReducerManager';
import { authMiddleware } from 'app/providers/StoreProvider/middlewares/authMiddleware';
import { $api } from 'shared/api/api';
import { NavigateFunction } from 'react-router-dom';

export function createReduxStore(
    initialState: StateSchema,
    asyncReducers?:ReducersMapObject<StateSchema>,
    navigate?: NavigateFunction,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                },
            },
        }).concat(authMiddleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
