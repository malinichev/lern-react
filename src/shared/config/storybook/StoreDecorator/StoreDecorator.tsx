import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice';

import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailPageReducer } from 'pages/ArticlesDetailsPage/models/slice';
import { profileReducer } from 'features/EditableProfileCard/model/slice/profileSlice';
import { pageRestoreScrollReducer } from 'widgets/Page';

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailPage: articleDetailPageReducer,
    addCommentForm: addCommentFormReducer,
    pageRestoreScroll: pageRestoreScrollReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducer?:ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }}>
        <StoryComponent />
    </StoreProvider>
);
