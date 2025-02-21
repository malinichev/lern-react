import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';
import { routeConfig } from '../config/routerConfig';
import { AppRotesProps } from '@/shared/types/router';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

const AppRouter = () => {
    const renderWithRoute = useCallback((route: AppRotesProps) => {
        const element = (
            <Suspense fallback={<Skeleton />}>{route.element}</Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route?.roles}>
                            {element}
                        </RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);
    return <Routes>{Object.values(routeConfig).map(renderWithRoute)}</Routes>;
};

export default AppRouter;
