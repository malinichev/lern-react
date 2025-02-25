import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    const counter = <Counter />;

    return (
        <Page data-testid="MainPage">
            <div>33333</div>
            <div>3323234233</div>
            {t('Главная страница')}
            {counter}
            <Counter />
        </Page>
    );
});

export default MainPage;
