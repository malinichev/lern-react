import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecommendationIsLoading = (state:StateSchema) => {
    return state.articleDetailPage?.recommendations.isLoading || false;
};
export const getArticleRecommendationError = (state:StateSchema) => {
    return state.articleDetailPage?.recommendations?.error;
};
