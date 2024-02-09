import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line malini4-plugin/layer-imports
import { UserRole } from '@/entities/User';

export type AppRotesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
