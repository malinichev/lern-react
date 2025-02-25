import { memo, MutableRefObject, ReactNode, useRef, UIEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfinityScroll } from '@/shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { getPageScrollByPath } from '../model/selectors/pageRestoreScroll';
import { pageRestoreScrollActions } from '../model/slice/pageRestoreScrollSlice';
import cls from './Page.module.scss';
import { TestProps } from '@/shared/types/tests';
import { toggleFeatures } from '@/shared/lib/features';

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    const scrollPosition = useSelector((state: StateSchema) =>
        getPageScrollByPath(state, pathname),
    );

    useInfinityScroll({
        triggerRef,
        wrapperRef: undefined,
        callback: onScrollEnd,
    });

    const handleScroll = useThrottle(
        (e: UIEvent<HTMLDivElement>) =>
            dispatch(
                pageRestoreScrollActions.setPosition({
                    path: pathname,
                    position: e.currentTarget.scrollTop,
                }),
            ),
        500,
    );

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <main
            id={PAGE_ID}
            ref={wrapperRef}
            data-testid={props['data-testid'] ?? 'Page'}
            onScroll={handleScroll}
            className={classNames(cls.PageRedesigned, {}, [className])}
        >
            {children}
            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerRef} />
            ) : null}
        </main>
    );
});
