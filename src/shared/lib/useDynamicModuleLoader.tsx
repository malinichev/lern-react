import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [key in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

type UseDynamicModuleLoaderType = (
    reducers:ReducersList,
    removeAfterUnmount?: boolean
) => void

export const useDynamicModuleLoader:UseDynamicModuleLoaderType = (reducers, removeAfterUnmount) => {
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]:ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        if (!removeAfterUnmount) return null;
        return () => {
            Object.entries(reducers).forEach(([name]:ReducersListEntry) => {
                store.reducerManager.remove(name);
                dispatch({ type: `@DESTROY ${name} reducer` });
            });
        };

        // eslint-disable-next-line
    }, []);
};
