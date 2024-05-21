import * as ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CookiesProvider } from 'react-cookie';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: true,
            refetchOnMount: true,
            staleTime: 60_000,
            retry: 2,
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <CookiesProvider>
            <App />
        </CookiesProvider>
        <ReactQueryDevtools />
    </QueryClientProvider>,
);
