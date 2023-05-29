import {
    CombinedState,
    configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userReducer } from 'entities/User';
import { counterReducer } from 'entities/Counter';
import { createReducerManager } from 'app/providers/StoreProvider/config/createReducerManager';
import { $api } from 'shared/api/api';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import { authMiddleware } from 'app/providers/StoreProvider/middlewares/authMiddleware';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?:ReducersMapObject<StateSchema>
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(authMiddleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
