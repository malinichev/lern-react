import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

/**
 * Устарел, используем компоненты из папки redesigned
 * @deprecated
 * */
export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <VStack justify="center">
                <p>{t('Произошла непредвиденная ошибка')}</p>
                <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
            </VStack>
        </div>
    );
};
