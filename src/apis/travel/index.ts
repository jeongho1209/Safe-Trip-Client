import { Instance } from '@apis/axios.ts';
import { TravelDestinationResponse } from '@apis/travel/response.ts';
import { useQuery } from '@tanstack/react-query';

const router = '/travelDestination';

export const UseTravelDestinationSearch = (name: string) => {
    return useQuery({
        queryKey: ['travelDestination', name],
        queryFn: async () => {
            const { data } = await Instance.get<TravelDestinationResponse>(
                `${router}/search?name=${name}&page=0&size=30&sort=DESC`,
            );
            return data;
        },
    });
};
