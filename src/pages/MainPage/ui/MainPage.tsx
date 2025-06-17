import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    const counter = toggleFeatures({
        name: 'isCounterEnabled',
        on: () => <Counter />,
        off: () => null,
    });

    toggleFeatures({
        name: 'isCounterEnabled',
        on: () => console.log('ON blablabla'),
        off: () => console.log('OFF blablabla'),
    });

    return (
        <Page data-testid="MainPage">
            {t('Главная страница')}
            {counter}
            <ToggleFeatures
                feature="isCounterEnabled"
                on={<Counter />}
                off={<div />}
            />
        </Page>
    );
});

export default MainPage;
