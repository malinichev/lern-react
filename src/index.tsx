import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import App from '@/app/App';
import '@/app/styles/index.scss';
import '@/shared/config/i18n/i18n';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ForceUpdateProvider } from '@/shared/lib/render/forceUpdate';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ForceUpdateProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ForceUpdateProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
export { Theme } from '@/shared/const/theme';
