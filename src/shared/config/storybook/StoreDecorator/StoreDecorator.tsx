import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

import { ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { pageRestoreScrollReducer } from '@/widgets/Page';
import { loginReducer } from '@/features/AuthByUsername';
import { articleDetailsReducer } from '@/entities/Article';
import { addCommentFormReducer } from '@/features/AddCommentForm';
import { articleDetailPageReducer } from '@/pages/ArticlesDetailsPage';
import { profileReducer } from '@/features/EditableProfileCard';

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
