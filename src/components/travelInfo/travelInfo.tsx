import { TravelDestinationIdType } from '@components/common/search/type.ts';
import styled from 'styled-components';
import { UseGetTravelInfo } from '@apis/travel/info';

export const TravelInfo = (idData: TravelDestinationIdType) => {
    const { data } = UseGetTravelInfo(idData.travelDestinationId);

    const travelInfoList = data?.travelInfoList.map((r) => {
        return {
            id: r.id,
            title: r.title,
            content: r.content,
        };
    });

    return (
        <>
            <ul>
                {travelInfoList?.map((t, idx) => {
                    return (
                        <MyContainer>
                            <TitleText>순서 : {idx + 1}</TitleText>
                            <br></br>
                            <TitleText>제목 : {t.title}</TitleText>
                            <br></br>
                            <ContentText>내용 : {t.content}</ContentText>
                        </MyContainer>
                    );
                })}
            </ul>
        </>
    );
};

const MyContainer = styled.li`
    padding-top: 20px;
`;

const TitleText = styled.text`
    font-size: 25px;
`;

const ContentText = styled.text`
    font-size: 20px;
`;
