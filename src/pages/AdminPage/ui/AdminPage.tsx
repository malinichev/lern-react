import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPage = memo(() => {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('Админка')}
        </Page>
    );
});

export default AdminPage;
