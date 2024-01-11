import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { HStack } from '@/shared/ui/Stack';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <Page data-testid="NotFoundPage" className={classNames(cls.NotFoundPage, {}, [className])}>
            <HStack justify="center">
                {t('Страница не найдена')}
            </HStack>
        </Page>
    );
};
