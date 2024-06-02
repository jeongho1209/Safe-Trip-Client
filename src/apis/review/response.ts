export type ReviewResponse = {
    reviewList: ReviewElement[];
};

export type ReviewElement = {
    id: number;
    title: string;
    content: string;
};
