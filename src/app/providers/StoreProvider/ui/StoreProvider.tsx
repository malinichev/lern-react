import { Provider } from 'react-redux';
import { ReactNode } from 'react';

import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/createReduxStore';

interface StoreProviderType {
    children: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?:DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props:StoreProviderType) => {
    const { children, initialState, asyncReducers } = props;
    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

    return (
        // @ts-ignore
        <Provider store={store}>
            {children}
        </Provider>
    );
};
