import { SignInData, SignUpData } from '@apis/user/request.ts';
import axios from 'axios';
import { TokenResponseData, UserResponseData } from '@apis/user/response.ts';
import { Instance } from '@apis/axios.ts';
import { useQuery } from '@tanstack/react-query';

const router = '/users';

export const UseSignUp = (signUpData: SignUpData) => {
    return axios.post<TokenResponseData>(`${import.meta.env.VITE_API_SERVER_URL}${router}/signup`, signUpData);
};

export const UseSignIn = (signInData: SignInData) => {
    return axios.post<TokenResponseData>(`${import.meta.env.VITE_API_SERVER_URL}${router}/login`, signInData);
};

export const UseGetMyInfo = () => {
    return useQuery({
        queryKey: ['getMyInfo'],
        queryFn: async () => {
            const { data } = await Instance.get<UserResponseData>(`${router}/my`);
            return data;
        },
    });
};
