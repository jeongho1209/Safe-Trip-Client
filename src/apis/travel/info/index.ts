import { CreateTravelInfoData, UpdateTravelInfoData } from '@apis/travel/request.ts';
import { Instance } from '@apis/axios.ts';
import { useQuery } from '@tanstack/react-query';
import { TravelInfoResponse } from '@apis/travel/response.ts';

const router = '/travelInfo';

export const UseGetTravelInfo = (travelDestinationId: number) => {
    return useQuery({
        queryKey: ['getTravelInfo', travelDestinationId],
        queryFn: async () => {
            const { data } = await Instance.get<TravelInfoResponse>(
                `${router}/${travelDestinationId}?page=0&size=30&sort=DESC`,
            );
            return data;
        },
    });
};

export const UseCreateTravelInfo = (travelDestinationId: number, data: CreateTravelInfoData) => {
    return Instance.post(`${router}/${travelDestinationId}`, data);
};

export const UseUpdateTravelInfo = (travelInfoId: number, data: UpdateTravelInfoData) => {
    return Instance.patch(`${router}/${travelInfoId}`, data);
};

export const UseDeleteTravelInfo = (travelInfoId: number) => {
    return Instance.delete(`${router}/${travelInfoId}`);
};
