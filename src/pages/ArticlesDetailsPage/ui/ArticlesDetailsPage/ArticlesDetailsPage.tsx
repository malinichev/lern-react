import { memo } from 'react';

import { useParams } from 'react-router-dom';
import { ArticleDetail } from '@/entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';

import { Page } from '@/widgets/Page';
import { ArticlesDetailsComments } from '../ArticlesDetailsComments/ArticlesDetailsComments';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleRecommendationList } from '@/features/ArticleRecommendationList';
import { articleDetailPageReducer } from '../../models/slice';
import { ArticleRating } from '@/features/articleRating';
import { ArticlesDetailsPageHeader } from '../ArticlesDetailsPageHeader/ArticlesDetailsPageHeader';
import { getFeatureFlag, ToggleFeatures } from '@/shared/lib/features';
import { Counter } from '@/entities/Counter';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

const reducers: ReducersList = {
    articleDetailPage: articleDetailPageReducer,
};

const ArticlesDetailsPage = memo(() => {
    const { id } = useParams<{ id: string }>();
    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');
    const isCounterEnabled = getFeatureFlag('isCounterEnabled');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <StickyContentLayout
                        content={
                            <Page>
                                <VStack gap="16" max>
                                    <DetailsContainer />
                                    <ArticleRating articleId={id} />
                                    <ArticleRecommendationList />
                                    <ArticlesDetailsComments id={id} />
                                </VStack>
                            </Page>
                        }
                        right={<AdditionalInfoContainer />}
                    />
                }
                off={
                    <Page>
                        <VStack gap="8" max>
                            <ArticlesDetailsPageHeader />
                            <ArticleDetail
                                id={__PROJECT__ === 'storybook' ? '1' : id}
                            />
                            {isCounterEnabled && <Counter />}
                            {isArticleRatingEnabled && (
                                <ArticleRating
                                    articleId={
                                        __PROJECT__ === 'storybook' ? '1' : id
                                    }
                                />
                            )}
                            <ArticleRecommendationList />
                            <ArticlesDetailsComments
                                id={__PROJECT__ === 'storybook' ? '1' : id}
                            />
                        </VStack>
                    </Page>
                }
            />
        </DynamicModuleLoader>
    );
});

export default ArticlesDetailsPage;
