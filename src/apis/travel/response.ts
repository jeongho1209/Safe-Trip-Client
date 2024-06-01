export type TravelDestinationResponse = {
    travelDestinationList: TravelDestinationElement[];
};

export type TravelDestinationElement = {
    id: number;
    name: string;
    engName: string;
    code: string;
};
