export enum AppRoutes {
  MAIN = 'main',
  ADMIN = 'admin',
  ABOUT = 'about',
  FORBIDDEN = 'forbidden',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'articles_details',
  ARTICLES_DETAILS_CREATE = 'articles_details_new',
  ARTICLES_DETAILS_EDIT = 'articles_details_edit',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.ADMIN]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    [AppRoutes.PROFILE]: '/profile/', // +id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLES_DETAILS]: '/articles/', // +id
    [AppRoutes.ARTICLES_DETAILS_CREATE]: '/articles/new',
    [AppRoutes.ARTICLES_DETAILS_EDIT]: '/articles/:id/edit', // +id
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};
