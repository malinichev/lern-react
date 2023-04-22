import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesDetailsPage = memo(() => {
    const { t } = useTranslation('articles');

    return (
        <div>
            {t('Отдельная статья')}
        </div>
    );
});

export default ArticlesDetailsPage;
