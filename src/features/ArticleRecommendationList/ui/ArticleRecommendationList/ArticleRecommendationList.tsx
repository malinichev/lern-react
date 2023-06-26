import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationList } from '../../api/articleRecommendationListApi';

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = memo(
    (props: ArticleRecommendationListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationList(3);

        if (error) {
            return null;
        }

        return (
            <VStack gap="8" className={classNames('', {}, [className])}>
                <Text size={TextSize.L} title={t('Рекомендуем')} />
                <ArticleList
                    target="_blank"
                    articles={articles}
                    isLoading={isLoading}
                />
            </VStack>
        );
    },
);
