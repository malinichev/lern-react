import { memo } from 'react';

import { useParams } from 'react-router-dom';
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
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

const reducers: ReducersList = {
    articleDetailPage: articleDetailPageReducer,
};

const ArticlesDetailsPage = memo(() => {
    const { id } = useParams<{ id: string }>();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
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
        </DynamicModuleLoader>
    );
});

export default ArticlesDetailsPage;
