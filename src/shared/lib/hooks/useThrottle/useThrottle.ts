import { useCallback, useRef } from 'react';

export const useThrottle = (
    callback: (...arg: any[]) => void,
    delay: number,
) => {
    const throttleRef = useRef(false);

    return useCallback(
        (...arg: any[]) => {
            if (!throttleRef.current) {
                callback(...arg);
                throttleRef.current = true;

                setTimeout(() => {
                    throttleRef.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );
};
