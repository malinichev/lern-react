import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

export const ArticlePageGreeting = memo(() => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    const { isArticlePageWasOpened } = useJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlePageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlePageWasOpened: true }));
        }
    }, [dispatch, isArticlePageWasOpened]);

    const onClose = () => setIsOpen(false);

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            <Text
                title={t('Добро пожаловать на страницу статей')}
                text={t(
                    'Здесь вы можете просматривать статьи на выбранные темы',
                )}
            />
        </Modal>
    );
});
