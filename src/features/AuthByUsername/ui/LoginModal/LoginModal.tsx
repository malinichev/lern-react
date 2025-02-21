import { Suspense } from 'react';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal className={className} isOpen={isOpen} onClose={onClose} lazy>
        <Suspense fallback={<Skeleton />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
