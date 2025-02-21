import { Dispatch, isAnyOf, isFulfilled, Middleware } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

import { userActions } from '@/entities/User';
import { StateSchema } from '@/app/providers/StoreProvider';
import { loginByUserName } from '@/features/AuthByUsername';

interface Store {
    dispatch: Dispatch;
    getState: () => StateSchema;
}
const isLoggedIn = isFulfilled(loginByUserName);
const isLoggedOut = isAnyOf(userActions.logout);

export const authMiddleware: Middleware<{}, StateSchema> =
    (store: Store) => (next) => (action) => {
        if (isLoggedIn(action)) {
            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(action.payload),
            );
        }

        if (isLoggedOut(action)) {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        }

        next(action);
    };
