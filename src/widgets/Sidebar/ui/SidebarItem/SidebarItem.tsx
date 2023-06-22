import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/sidebar';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
    authOnly: boolean;
}

export const SidebarItem = memo(({ item, collapsed, authOnly }: SidebarItemProps) => {
    const { t } = useTranslation('sidebar');
    const isAuth = useSelector(getUserAuthData);
    if (authOnly && !isAuth) return null;

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames('', { [cls.collapsed]: collapsed })}
        >
            <HStack align="start">
                <item.Icon className={cls.icon} />
                <span className={cls.link}>
                    {/* i18next-extract-disable-next-line */}
                    {t(item.text)}
                </span>
            </HStack>
        </AppLink>
    );
});
