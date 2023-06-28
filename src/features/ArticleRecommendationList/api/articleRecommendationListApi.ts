import { rtkApi } from 'shared/api/rtkApi';
import { Article } from 'entities/Article';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: { _limit: limit },
            }),
        }),
        // createArticleRecommendation: build.mutation({
        //     query: (limit) => ({
        //         url: '/articles',
        //         params: { _limit: limit },
        //         method: 'POST',
        //     }),
        // }),
    }),
});

export const useArticleRecommendationList = recommendationsApi.useGetArticleRecommendationsListQuery;
// export const useCreateArticleRecommendation = recommendationsApi.useCreateArticleRecommendationMutation;
