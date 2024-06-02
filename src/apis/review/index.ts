import { Instance } from '@apis/axios.ts';
import { CreateReviewData, UpdateReviewData } from '@apis/review/request.ts';
import { useQuery } from '@tanstack/react-query';
import { ReviewResponse } from '@apis/review/response.ts';

const router = '/review';

export const UseGetReview = (travelDestinationId: number) => {
    return useQuery({
        queryKey: ['getReview', travelDestinationId],
        queryFn: async () => {
            const { data } = await Instance.get<ReviewResponse>(
                `${router}/${travelDestinationId}?page=0&size=30&sort=DESC`,
            );
            return data;
        },
    });
};

export const UseCreateReview = (travelDestinationId: number, data: CreateReviewData) => {
    return Instance.post(`${router}/${travelDestinationId}`, data);
};

export const UseUpdateReview = (reviewId: number, data: UpdateReviewData) => {
    return Instance.patch(`${router}/${reviewId}`, data);
};

export const UseDeleteReview = (reviewId: number) => {
    return Instance.delete(`${router}/${reviewId}`);
};
