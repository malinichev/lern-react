import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
    AppRotesProps,
    routeConfig,
} from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';

const AppRouter = () => {
    const renderWithRoute = useCallback(
        (route: AppRotesProps) => {
            const element = (
                <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
            );
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={
                        route.authOnly ? (
                            <RequireAuth roles={route?.roles}>{element}</RequireAuth>
                        ) : (
                            element
                        )
                    }
                />
            );
        },
        [],
    );
    return <Routes>{Object.values(routeConfig).map(renderWithRoute)}</Routes>;
};

export default AppRouter;
