import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

import { ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';

import { articleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/AddCommentForm/testing';
import { articleDetailPageReducer } from '@/pages/ArticlesDetailsPage/testing';
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { pageRestoreScrollReducer } from '@/widgets/Page/testing';
import { Decorator } from '@storybook/react';

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailPage: articleDetailPageReducer,
    addCommentForm: addCommentFormReducer,
    pageRestoreScroll: pageRestoreScrollReducer,
};

export const StoreDecorator: (
    state: DeepPartial<StateSchema>,
    asyncReducer?: ReducersList,
) => Decorator = (state, asyncReducer) => (StoryComponent: any) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }}
    >
        <StoryComponent />
    </StoreProvider>
);
