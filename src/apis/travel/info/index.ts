import { CreateTravelInfoData, UpdateTravelInfoData } from '@apis/travel/request.ts';
import { Instance } from '@apis/axios.ts';

const router = '/travelInfo';

export const UseCreateTravelInfo = (travelDestinationId: number, data: CreateTravelInfoData) => {
    return Instance.post(`${router}/${travelDestinationId}`, data);
};

export const UseUpdateTravelInfo = (travelInfoId: number, data: UpdateTravelInfoData) => {
    return Instance.patch(`${router}/${travelInfoId}`, data);
};

export const UseDeleteTravelInfo = (travelInfoId: number) => {
    return Instance.delete(`${router}/${travelInfoId}`);
};
