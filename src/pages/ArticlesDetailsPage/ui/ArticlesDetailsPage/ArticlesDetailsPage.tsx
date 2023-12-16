import { memo } from 'react';

import { useParams } from 'react-router-dom';
import { ArticleDetail } from '@/entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';

import { Page } from '@/widgets/Page';

import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationList } from '@/features/ArticleRecommendationList';
import { ArticlesDetailsComments } from '../ArticlesDetailsComments/ArticlesDetailsComments';
import { ArticlesDetailsPageHeader } from '../ArticlesDetailsPageHeader/ArticlesDetailsPageHeader';
import { articleDetailPageReducer } from '../../models/slice';
import { ArticleRating } from '@/features/articleRating';

const reducers: ReducersList = {
    articleDetailPage: articleDetailPageReducer,
};

const ArticlesDetailsPage = memo(() => {
    const { id } = useParams<{ id: string }>();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page>
                <VStack gap="8" max>
                    <ArticlesDetailsPageHeader />
                    <ArticleDetail
                        id={__PROJECT__ === 'storybook' ? '1' : (id as string)}
                    />
                    <ArticleRating
                        articleId={__PROJECT__ === 'storybook' ? '1' : (id as string)}
                    />
                    <ArticleRecommendationList />
                    <ArticlesDetailsComments
                        id={__PROJECT__ === 'storybook' ? '1' : (id as string)}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlesDetailsPage;
