export type TravelDestinationResponse = {
    travelDestinationList: TravelDestinationElement[];
};

export type TravelDestinationElement = {
    id: number;
    name: string;
    engName: string;
    code: string;
};

export type TravelInfoResponse = {
    travelInfoList: TravelInfoElement[];
};

export type TravelInfoElement = {
    id: number;
    title: string;
    content: string;
};
