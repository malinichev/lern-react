import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { HStack } from 'shared/ui/Stack';
import { ArticlesSortField } from '../../model/consts/consts';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticlesSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticlesSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, sort, order, onChangeOrder, onChangeSort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticlesSortField>[]>(
        () => [
            {
                value: ArticlesSortField.CREATED,
                content: t('дате создания'),
            },
            {
                value: ArticlesSortField.VIEWS,
                content: t('количеству просмотров'),
            },
            {
                value: ArticlesSortField.TITLE,
                content: t('названию'),
            },
        ],
        [t],
    );

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <HStack gap="16" align="center">
                <Select<ArticlesSortField>
                    value={sort}
                    options={sortFieldOptions}
                    onChange={onChangeSort}
                    label={t('Сортировать по')}
                />
                <Select<SortOrder>
                    value={order}
                    options={orderOptions}
                    onChange={onChangeOrder}
                    label={t('по')}
                />
            </HStack>
        </div>
    );
});
