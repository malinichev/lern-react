import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tab/Tabs';
import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, onChangeType, value } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все'),
        },
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.SIENCE,
            content: t('Наука'),
        },
    ], [t]);

    const onTabClick = useCallback(
        (tab: TabItem<ArticleType>) => {
            onChangeType(tab.value);
        },
        [onChangeType],
    );

    return (
        <Tabs
            className={classNames('', {}, [className])}
            onTabClick={onTabClick}
            tabs={typeTabs}
            value={value}
        />
    );
});
