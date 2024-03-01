import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';

import { VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleRecommendationList } from '../../api/articleRecommendationListApi';
import { ArticleList } from '@/entities/Article';

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

        if (error || !articles) {
            return null;
        }

        return (
            <VStack
                data-testid="ArticleRecommendationList"
                max
                gap="8"
                align="start"
                className={classNames('', {}, [className])}
            >
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
