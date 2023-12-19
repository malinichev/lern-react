import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

import { ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line malini4-plugin/layer-imports
import { pageRestoreScrollReducer } from '@/widgets/Page';

import { articleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/AddCommentForm/testing';
import { articleDetailPageReducer } from '@/pages/ArticlesDetailsPage/testing';
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailPage: articleDetailPageReducer,
    addCommentForm: addCommentFormReducer,
    pageRestoreScroll: pageRestoreScrollReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducer?: ReducersList) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }}
    >
        <StoryComponent />
    </StoreProvider>
);
