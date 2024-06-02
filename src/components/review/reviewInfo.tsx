import { UseGetReview } from '@apis/review';
import styled from 'styled-components';
import { TravelDestinationIdType } from '@components/common/search/type.ts';

export const ReviewInfo = (idData: TravelDestinationIdType) => {
    const { data } = UseGetReview(idData.travelDestinationId);

    const reviewList = data?.reviewList.map((r) => {
        return {
            id: r.id,
            title: r.title,
            content: r.content,
        };
    });

    return (
        <>
            <ul>
                {reviewList?.map((r, idx) => {
                    return (
                        <MyContainer>
                            <TitleText>순서 : {idx + 1}</TitleText>
                            <br></br>
                            <TitleText>제목 : {r.title}</TitleText>
                            <br></br>
                            <ContentText>내용 : {r.content}</ContentText>
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
