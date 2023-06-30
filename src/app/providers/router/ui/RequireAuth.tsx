import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles, UserRole } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useMemo } from 'react';

interface RequireAuthProps {
    children: JSX.Element
    roles?: UserRole[]
}

export const RequireAuth = ({ children, roles }:RequireAuthProps) => {
    const auth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);
    const location = useLocation();

    const hasRequireRole = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((requireRole) => Boolean(userRoles?.includes(requireRole)));
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!hasRequireRole) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    return children;
};
