import { Instance } from '@apis/axios.ts';
import { CreateReviewData, UpdateReviewData } from '@apis/review/request.ts';

const router = '/review';

export const UseCreateReview = (travelDestinationId: number, data: CreateReviewData) => {
    return Instance.post(`${router}/${travelDestinationId}`, data);
};

export const UseUpdateReview = (reviewId: number, data: UpdateReviewData) => {
    return Instance.patch(`${router}/${reviewId}`, data);
};

export const UseDeleteReview = (reviewId: number) => {
    return Instance.delete(`${router}/${reviewId}`);
};
