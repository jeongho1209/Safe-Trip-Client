export type TokenResponseData = {
    accessToken: string;
    accessTokenExpiredAt: string;
};

export type UserResponseData = {
    accountId: string;
    age: number;
    reviewList: ReviewElement[];
    travelInfoList: TravelInfoElement[];
};

export type ReviewElement = {
    id: number;
    title: string;
    content: string;
};

export type TravelInfoElement = {
    id: number;
    title: string;
    content: string;
    name: string;
};
