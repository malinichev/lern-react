import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

/**
 * Устарел, используем компоненты из папки redesigned
 * @deprecated
 * */
export const PageLoader = memo(({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
));
