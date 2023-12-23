import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPage } from '@/pages/AdminPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesDetailsPage } from '@/pages/ArticlesDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AppRotesProps } from '@/shared/types/router';
import {
    AppRoutes,
    getRouteAbout,
    getRouteAdmin, getRouteArticleCreate, getRouteArticleDetails, getRouteArticleEdit, getRouteArticles,
    getRouteForbidden,
    getRouteMain, getRouteProfile,
} from '@/shared/const/router';

export const routeConfig: Record<AppRoutes, AppRotesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.ADMIN]: {
        path: getRouteAdmin(),
        element: <AdminPage />,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
        authOnly: true,
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        path: getRouteArticleDetails(':id'),
        element: <ArticlesDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_DETAILS_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_DETAILS_EDIT]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
