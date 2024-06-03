import { useQuery } from '@tanstack/react-query';
import { Instance } from '@apis/axios.ts';
import { SafeInfoListResponse, SafeInfoResponse } from '@apis/safeInfo/response.ts';

const router = '/safeInfo';

export const UseSafeInfoSearch = (name: string, searchId: string) => {
    return useQuery({
        queryKey: ['safeInfo', name, searchId],
        queryFn: async () => {
            const { data } = await Instance.get<SafeInfoResponse>(`${router}?searchId=${searchId}`);
            return data;
        },
        // enabled: searchId.length > 15,
    });
};

export const UseSafeInfoListSearch = (debouncedName: string, name?: string, engName?: string) => {
    return useQuery({
        queryKey: ['safeInfoList', debouncedName, name, engName],
        queryFn: async () => {
            const { data } = await Instance.get<SafeInfoListResponse>(
                `${router}?name=${name}&page=0&size=30&sort=DESC`,
            );
            return data;
        },
        // enabled: (name?.length as number) > 1,
    });
};
