import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getInitAuthData, initAuthData } from '@/entities/User';

import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/NavBar';
import { Sidebar } from '@/widgets/Sidebar';
import { PageLoader } from '@/widgets/PageLoader';

export const App = () => {
    const dispatch = useAppDispatch();
    const _initAuth = useSelector(getInitAuthData);

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!_initAuth) {
        return <PageLoader />;
    }

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
