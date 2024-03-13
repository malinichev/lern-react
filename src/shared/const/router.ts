export enum AppRoutes {
    MAIN = 'main',
    ADMIN = 'admin',
    ABOUT = 'about',
    SETTINGS = 'settings',
    FORBIDDEN = 'forbidden',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLES_DETAILS = 'articles_details',
    ARTICLES_DETAILS_CREATE = 'articles_details_new',
    ARTICLES_DETAILS_EDIT = 'articles_details_edit',
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteSettings = () => '/settings';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteSettings()]: AppRoutes.SETTINGS,
    [getRouteAbout()]: AppRoutes.ABOUT,
    [getRouteProfile(':id')]: AppRoutes.PROFILE,
    [getRouteArticles()]: AppRoutes.ARTICLES,
    [getRouteArticleDetails(':id')]: AppRoutes.ARTICLES_DETAILS,
    [getRouteArticleCreate()]: AppRoutes.ARTICLES_DETAILS_CREATE,
    [getRouteArticleEdit(':id')]: AppRoutes.ARTICLES_DETAILS_EDIT,
    [getRouteAdmin()]: AppRoutes.ADMIN,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
