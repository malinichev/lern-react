import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetail } from 'entities/Article';
import { useParams } from 'react-router-dom';

const ArticlesDetailsPage = memo(() => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id:string}>();

    if (!id && __PROJECT__ !== 'storybook') {
        return (
            <div>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div>
            {t('Отдельная статья')}
            <ArticleDetail id={__PROJECT__ === 'storybook' ? '1' : id as string} />
        </div>
    );
});

export default ArticlesDetailsPage;
