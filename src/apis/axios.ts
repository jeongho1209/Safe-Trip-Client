import axios, { AxiosError } from 'axios';
import { Cookies } from 'react-cookie';

export const Instance = axios.create({
    baseURL: import.meta.env.VITE_API_SERVER_URL,
    timeout: 10_000,
});

const cookies = new Cookies();

Instance.interceptors.request.use(
    (config) => {
        const accessToken = cookies.get('access_token');
        const returnConfig = { ...config };
        if (accessToken) {
            returnConfig.headers!.Authorization = `Bearer ${accessToken}`;
        }
        return returnConfig;
    },
    (error: AxiosError) => Promise.reject(error),
);

Instance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError<AxiosError>) => {
        if (axios.isAxiosError(error) && error.response) {
            const errorMessage = error.response.data.message;
            if (
                errorMessage === 'Expired Token' ||
                errorMessage === 'Invalid Token' ||
                errorMessage === 'Invalid Signature'
            ) {
                cookies.remove('access_token');
                window.location.href = '/signin';
            }
        } else {
            throw error;
        }
    },
);
