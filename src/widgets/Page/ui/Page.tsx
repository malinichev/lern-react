import {
    memo, MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import { getPageScrollByPath } from '../model/selector/pageRestoreScroll';
import { pageRestoreScrollActions } from '../model/slice/pageRestoreScrollSlice';
import cls from './Page.module.scss';

interface PageProps {
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

    const scrollPosition = useSelector(
        (state:StateSchema) => getPageScrollByPath(state, pathname),
    );

    useInfinityScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

    const handleScroll = useThrottle((e:UIEvent<HTMLDivElement>) => dispatch(pageRestoreScrollActions.setPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
    })), 500);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <main id={PAGE_ID} onScroll={handleScroll} ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
        </main>
    );
});
