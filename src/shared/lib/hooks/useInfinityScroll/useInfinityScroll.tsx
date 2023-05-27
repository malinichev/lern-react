import { MutableRefObject, useEffect } from 'react';

export interface UseInfinityScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfinityScroll = ({
    callback,
    triggerRef,
    wrapperRef,
}: UseInfinityScrollOptions) => {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;

        // Используем замыкание чтоб элемент был доступен после демонтирования страницы
        const triggerEl = triggerRef.current;
        const wrapperEl = wrapperRef.current;

        if (callback) {
            const options = {
                root: wrapperEl,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerEl);
        }

        return () => {
            if (observer && triggerEl) {
                observer.unobserve(triggerEl);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};
