import { Provider } from 'react-redux';
import { ReactNode } from 'react';

import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/createReduxStore';

interface StoreProviderType {
    children: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props:StoreProviderType) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
