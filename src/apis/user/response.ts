export type TokenResponseData = {
    accessToken: string;
    accessTokenExpiredAt: string;
};

export type UserResponseData = {
    accountId: string;
    age: number;
    reviewList: ReviewElement[];
};

export type ReviewElement = {
    id: number;
    title: string;
    content: string;
    createdDate: string;
    isMine: boolean;
    accountId: string;
};
