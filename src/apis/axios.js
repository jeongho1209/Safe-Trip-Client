import axios from 'axios';
import { Cookies } from 'react-cookie';

const BASE_URL = process.env.BASE_URL;

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10_000,
});

const cookies = new Cookies();

instance.interceptors.request.use(
    (config) => {
        const accessToken = cookies.get('access_token');
        const returnConfig = { ...config };
        if (accessToken) {
            returnConfig.headers.Authorization = `Bearer ${accessToken}`;
        }
        return returnConfig;
    },
    (error) => Promise.reject(error),
);
