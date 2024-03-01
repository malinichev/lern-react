import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { HStack } from '@/shared/ui/deprecated/Stack';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../model/selectors/addCommentFormSelectors';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const handleInputChange = useCallback(
        (value: string) => dispatch(addCommentFormActions.setText(value)),
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        handleInputChange('');
    }, [handleInputChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div
                data-testid="AddCommentForm"
                className={classNames(cls.AddCommentForm, {}, [className])}
            >
                <HStack justify="between" align="center">
                    <Input
                        data-testid="AddCommentForm.Input"
                        className={cls.Input}
                        value={text}
                        placeholder={t('Добавить комментариий')}
                        onChange={handleInputChange}
                    />
                    <Button
                        data-testid="AddCommentForm.Button"
                        onClick={onSendHandler}
                        theme={ButtonTheme.OUTLINE}
                    >
                        {t('Отправить')}
                    </Button>
                </HStack>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
