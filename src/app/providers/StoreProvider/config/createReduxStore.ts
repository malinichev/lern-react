import {
    Action, configureStore, Dispatch, isAnyOf, isFulfilled, ReducersMapObject,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions, userReducer } from 'entities/User';
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName/loginByUserName';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { counterReducer } from 'entities/Counter';
import { loginReducer } from 'features/AuthByUsername';

interface Store {
    dispatch: Dispatch;
    getState: () => StateSchema;
}

const isLoggedIn = isFulfilled(loginByUserName);
const isLoggedOut = isAnyOf(userActions.logout);

const authMiddleware = (store: Store) => (next: (action: Action) => void) => (action: Action): void => {
    if (isLoggedIn(action)) {
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(action.payload));
    }

    if (isLoggedOut(action)) {
        localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }

    next(action);
};

export function createReduxStore(initialState: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer,
    };

    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
    });
}
