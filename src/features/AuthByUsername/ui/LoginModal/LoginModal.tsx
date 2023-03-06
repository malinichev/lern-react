import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader/Loader';
import { Suspense } from 'react';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={className}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync />
        </Suspense>
    </Modal>
);
