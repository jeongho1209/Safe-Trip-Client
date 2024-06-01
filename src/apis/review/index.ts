import { Instance } from '@apis/axios.ts';
import { CreateReviewData, UpdateReviewData } from '@apis/review/request.ts';

const router = '/review';

export const UseCreateReview = (travelDestinationId: number, data: CreateReviewData) => {
    return Instance.post(`${router}/${travelDestinationId}`, data);
};

export const UseUpdateReview = (travelDestinationId: number, data: UpdateReviewData) => {
    return Instance.patch(`${router}/${travelDestinationId}`, data);
};

export const UseDeleteReview = (travelDestinationId: number) => {
    return Instance.delete(`${router}/${travelDestinationId}`);
};
