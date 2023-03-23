import { Provider } from 'react-redux';
import { ReactNode } from 'react';

import { StateSchema } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/createReduxStore';

interface StoreProviderType {
    children: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?:DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props:StoreProviderType) => {
    const { children, initialState, asyncReducers } = props;
    const navigate = useNavigate();
    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>, navigate);

    return (
        // @ts-ignore
        <Provider store={store}>
            {children}
        </Provider>
    );
};
