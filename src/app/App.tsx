import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getInitAuthData, userActions } from '@/entities/User';

import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/NavBar';
import { Sidebar } from '@/widgets/Sidebar';

export const App = () => {
    const dispatch = useAppDispatch();
    const _initAuth = useSelector(getInitAuthData);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {_initAuth && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
