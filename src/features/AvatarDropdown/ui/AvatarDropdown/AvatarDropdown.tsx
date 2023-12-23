import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { getUserAuthData, isUserAdmin, isUserManager } from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';

interface AvatarDropdownProps {
    className?: string;
    onLogout:()=>void
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className, onLogout } = props;
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) return null;

    return (

        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom left"
            items={[
                ...(isAdminPanelAvailable
                    ? [
                        {
                            content: t('Админка'),
                            href: getRouteAdmin(),
                        },
                    ]
                    : []),
                {
                    content: t('Профиль'),
                    href: getRouteProfile(authData.id),
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    );
});
