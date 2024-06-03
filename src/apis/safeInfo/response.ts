export type SafeInfoResponse = {
    content: string;
    name: string;
    code: string;
    title: string;
};

export type SafeInfoListResponse = {
    safeInfoElement: SafeInfoElement[];
};

export type SafeInfoElement = {
    content: string;
    name: string;
    code: string;
    title: string;
};
