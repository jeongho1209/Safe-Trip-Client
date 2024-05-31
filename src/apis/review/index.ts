import { Instance } from '@apis/axios.ts';
import { CreateReviewData } from '@apis/review/request.ts';

const router = '/review';

export const UseCreateReview = (travelDestinationId: number, data: CreateReviewData) => {
    return Instance.post(`${router}/${travelDestinationId}`, data);
};
